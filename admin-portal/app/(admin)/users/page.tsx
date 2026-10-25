"use client";

import { UserPlus } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { DataTable } from "../../../components/DataTable";
import { EmptyState } from "../../../components/EmptyState";
import { ErrorState } from "../../../components/ErrorState";
import { PageHeader } from "../../../components/PageHeader";
import { Select } from "../../../components/Select";
import { ApiError } from "../../../lib/api/client";
import { usersApi } from "../../../lib/api/users";
import { useAuth } from "../../../lib/auth-context";
import { cn } from "../../../lib/utils";
import { Role, User } from "../../../lib/types";

const ROLES: Role[] = ["SUPER_ADMIN", "ADMIN", "EDITOR", "VIEWER", "SALES_MANAGER", "SALES_AGENT"];
const ROLE_OPTIONS = ROLES.map((role) => ({ value: role, label: role }));

export default function UsersPage() {
  const { user: currentUser } = useAuth();

  if (currentUser?.role !== "SUPER_ADMIN") {
    return (
      <div>
        <PageHeader title="Users" />
        <EmptyState title="Access restricted" description="Only Super Admins can manage users." />
      </div>
    );
  }

  return <UsersManager />;
}

function UsersManager() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("VIEWER");
  const [formError, setFormError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  function load() {
    usersApi
      .list()
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch(() => setError("Failed to load users."))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function handleCreate(event: FormEvent) {
    event.preventDefault();
    setFormError(null);
    setCreating(true);
    try {
      await usersApi.create({ name, email, password, role });
      setName("");
      setEmail("");
      setPassword("");
      setRole("VIEWER");
      load();
    } catch (err) {
      setFormError(err instanceof ApiError ? err.message : "Failed to create user.");
    } finally {
      setCreating(false);
    }
  }

  async function handleRoleChange(user: User, newRole: Role) {
    await usersApi.update(user.id, { role: newRole });
    load();
  }

  async function handleToggleActive(user: User) {
    if (user.isActive) {
      await usersApi.deactivate(user.id);
    } else {
      await usersApi.update(user.id, { isActive: true });
    }
    load();
  }

  return (
    <div>
      <PageHeader title="Users" />

      {error && <ErrorState message={error} />}

      {!error && (
        <DataTable
          rows={users}
          loading={loading}
          rowKey={(u) => u.id}
          columns={[
            { header: "Name", cell: (u) => <span className="font-medium text-slate-800">{u.name}</span> },
            { header: "Email", cell: (u) => <span className="text-slate-600">{u.email}</span> },
            {
              header: "Role",
              cell: (u) => (
                <Select
                  value={u.role}
                  onChange={(value) => handleRoleChange(u, value as Role)}
                  options={ROLE_OPTIONS}
                  className="w-36"
                />
              ),
            },
            {
              header: "Status",
              cell: (u) => (
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
                    u.isActive ? "bg-green-50 text-green-700" : "bg-slate-100 text-slate-500",
                  )}
                >
                  {u.isActive ? "Active" : "Deactivated"}
                </span>
              ),
            },
            {
              header: "",
              cell: (u) => (
                <button
                  onClick={() => handleToggleActive(u)}
                  className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 transition hover:bg-slate-100"
                >
                  {u.isActive ? "Deactivate" : "Activate"}
                </button>
              ),
            },
          ]}
        />
      )}

      <form onSubmit={handleCreate} className="mt-6 space-y-3 rounded-lg border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-semibold text-slate-900">Create User</h2>
        <div className="flex flex-wrap items-start gap-3">
          <input
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[var(--color-brand)] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[var(--color-brand)] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password (min. 8 characters)"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[var(--color-brand)] focus:outline-none"
          />
          <Select value={role} onChange={(value) => setRole(value as Role)} options={ROLE_OPTIONS} className="w-40" />
          <button
            type="submit"
            disabled={creating}
            className="flex items-center gap-1.5 rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--color-brand-dark)] disabled:opacity-60"
          >
            <UserPlus className="h-4 w-4" />
            {creating ? "Creating…" : "Create"}
          </button>
        </div>
        {formError && <ErrorState message={formError} />}
      </form>
    </div>
  );
}
