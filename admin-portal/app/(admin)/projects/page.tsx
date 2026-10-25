"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { DataTable } from "../../../components/DataTable";
import { EmptyState } from "../../../components/EmptyState";
import { ErrorState } from "../../../components/ErrorState";
import { PageHeader } from "../../../components/PageHeader";
import { ApiError } from "../../../lib/api/client";
import { projectsApi } from "../../../lib/api/projects";
import { useAuth } from "../../../lib/auth-context";
import { formatEnumLabel, projectStatusColor } from "../../../lib/format";
import { cn } from "../../../lib/utils";
import { PaginatedProjects, Project } from "../../../lib/types";

export default function ProjectsPage() {
  const { user } = useAuth();
  const canManage = user?.role === "SUPER_ADMIN" || user?.role === "ADMIN" || user?.role === "SALES_MANAGER";

  const [result, setResult] = useState<PaginatedProjects | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [location, setLocation] = useState("");
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const load = useCallback(() => {
    projectsApi
      .list({ limit: 50 })
      .then((data) => {
        setResult(data);
        setError(null);
      })
      .catch(() => setError("Failed to load projects."));
  }, []);

  useEffect(load, [load]);

  function slugify(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  async function handleCreate(event: FormEvent) {
    event.preventDefault();
    setFormError(null);
    setCreating(true);
    try {
      await projectsApi.create({ name, slug: slug || slugify(name), location: location || undefined });
      setName("");
      setSlug("");
      setLocation("");
      load();
    } catch (err) {
      setFormError(err instanceof ApiError ? err.message : "Failed to create project.");
    } finally {
      setCreating(false);
    }
  }

  return (
    <div>
      <PageHeader title="Projects" />

      {error && <ErrorState message={error} />}

      {!error && result && result.items.length === 0 && (
        <EmptyState title="No projects yet" description="Create a project below to start linking sales enquiries to it." />
      )}

      {!error && result && result.items.length > 0 && (
        <DataTable
          rows={result.items}
          loading={false}
          rowKey={(p) => p.id}
          columns={[
            {
              header: "Name",
              cell: (p: Project) => (
                <Link href={`/projects/${p.id}`} className="font-medium text-[var(--color-brand)] hover:underline">
                  {p.name}
                </Link>
              ),
            },
            { header: "Location", cell: (p: Project) => <span className="text-slate-600">{p.location ?? "—"}</span> },
            {
              header: "Status",
              cell: (p: Project) => (
                <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", projectStatusColor(p.status))}>
                  {formatEnumLabel(p.status)}
                </span>
              ),
            },
            { header: "Unit types", cell: (p: Project) => <span className="text-slate-600">{p.unitTypes.length}</span> },
            { header: "Created", cell: (p: Project) => <span className="text-slate-500">{new Date(p.createdAt).toLocaleDateString()}</span> },
          ]}
        />
      )}

      {canManage && (
        <form onSubmit={handleCreate} className="mt-6 space-y-3 rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-slate-900">Create Project</h2>
          <div className="flex flex-wrap items-start gap-3">
            <input
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[var(--color-brand)] focus:outline-none"
            />
            <input
              placeholder="Slug (auto-generated if left blank)"
              value={slug}
              onChange={(e) => setSlug(slugify(e.target.value))}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[var(--color-brand)] focus:outline-none"
            />
            <input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[var(--color-brand)] focus:outline-none"
            />
            <button
              type="submit"
              disabled={creating}
              className="flex items-center gap-1.5 rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--color-brand-dark)] disabled:opacity-60"
            >
              <Plus className="h-4 w-4" />
              {creating ? "Creating…" : "Create"}
            </button>
          </div>
          {formError && <ErrorState message={formError} />}
        </form>
      )}
    </div>
  );
}
