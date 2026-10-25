"use client";

import { Archive, Plus, Trash2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { ConfirmDialog } from "../../../../components/ConfirmDialog";
import { ErrorState } from "../../../../components/ErrorState";
import { PageHeader } from "../../../../components/PageHeader";
import { Select } from "../../../../components/Select";
import { Skeleton } from "../../../../components/Skeleton";
import { ApiError } from "../../../../lib/api/client";
import { projectsApi } from "../../../../lib/api/projects";
import { useAuth } from "../../../../lib/auth-context";
import { formatEnumLabel, projectStatusColor } from "../../../../lib/format";
import { cn } from "../../../../lib/utils";
import { Project, ProjectStatus, UnitAvailabilityStatus } from "../../../../lib/types";

const STATUS_OPTIONS = ["DRAFT", "PUBLISHED", "ARCHIVED"].map((s) => ({ value: s, label: formatEnumLabel(s) }));

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { user } = useAuth();
  const canManage = user?.role === "SUPER_ADMIN" || user?.role === "ADMIN" || user?.role === "SALES_MANAGER";

  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [confirmArchive, setConfirmArchive] = useState(false);

  const [unitName, setUnitName] = useState("");
  const [unitMin, setUnitMin] = useState("");
  const [unitMax, setUnitMax] = useState("");
  const [addingUnit, setAddingUnit] = useState(false);

  const load = useCallback(() => {
    projectsApi
      .get(params.id)
      .then((data) => {
        setProject(data);
        setDescription(data.description ?? "");
        setError(null);
      })
      .catch((err) => setError(err instanceof ApiError ? err.message : "Failed to load project."));
  }, [params.id]);

  useEffect(load, [load]);

  async function handleStatusChange(status: string) {
    if (!project) return;
    setActionError(null);
    try {
      const updated = await projectsApi.update(project.id, { status: status as ProjectStatus });
      setProject({ ...updated, unitTypes: project.unitTypes });
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "Could not update status.");
    }
  }

  async function handleDescriptionBlur() {
    if (!project || description === (project.description ?? "")) return;
    setActionError(null);
    try {
      const updated = await projectsApi.update(project.id, { description });
      setProject({ ...updated, unitTypes: project.unitTypes });
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "Could not save the description.");
    }
  }

  async function handleArchive() {
    if (!project) return;
    setConfirmArchive(false);
    await projectsApi.archive(project.id);
    router.push("/projects");
  }

  async function handleAddUnitType(event: FormEvent) {
    event.preventDefault();
    if (!project || !unitName.trim()) return;
    setAddingUnit(true);
    setActionError(null);
    try {
      await projectsApi.addUnitType(project.id, {
        name: unitName.trim(),
        indicativePriceMin: unitMin ? Number(unitMin) : undefined,
        indicativePriceMax: unitMax ? Number(unitMax) : undefined,
      });
      setUnitName("");
      setUnitMin("");
      setUnitMax("");
      load();
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "Could not add the unit type.");
    } finally {
      setAddingUnit(false);
    }
  }

  async function handleRemoveUnitType(unitTypeId: string) {
    if (!project) return;
    setActionError(null);
    try {
      await projectsApi.removeUnitType(project.id, unitTypeId);
      load();
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "Could not remove the unit type.");
    }
  }

  async function handleUnitAvailabilityChange(unitTypeId: string, availabilityStatus: string) {
    if (!project) return;
    setActionError(null);
    try {
      await projectsApi.updateUnitType(project.id, unitTypeId, { availabilityStatus: availabilityStatus as UnitAvailabilityStatus });
      load();
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "Could not update availability.");
    }
  }

  if (error) return <ErrorState message={error} />;

  if (!project) {
    return (
      <div>
        <PageHeader title="Project" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <PageHeader
        title={project.name}
        action={
          canManage ? (
            <Select value={project.status} onChange={handleStatusChange} options={STATUS_OPTIONS} className="w-40" />
          ) : (
            <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", projectStatusColor(project.status))}>
              {formatEnumLabel(project.status)}
            </span>
          )
        }
      />

      {actionError && <div className="mb-4"><ErrorState message={actionError} /></div>}

      <section className="rounded-lg border border-slate-200 bg-white p-5">
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Slug</dt>
            <dd className="mt-0.5 text-slate-700">{project.slug}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Location</dt>
            <dd className="mt-0.5 text-slate-700">{project.location ?? "—"}</dd>
          </div>
        </dl>

        <div className="mt-4">
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleDescriptionBlur}
            disabled={!canManage}
            rows={4}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none disabled:bg-slate-50"
          />
        </div>

        {canManage && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setConfirmArchive(true)}
              className="flex items-center gap-1.5 rounded-md border border-red-200 px-3 py-1.5 text-xs text-red-600 transition hover:bg-red-50"
            >
              <Archive className="h-3.5 w-3.5" />
              Archive project
            </button>
          </div>
        )}
      </section>

      <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="mb-3 text-sm font-semibold text-slate-900">Cottage / unit types</h2>

        {project.unitTypes.length === 0 ? (
          <p className="text-sm text-slate-400">No unit types yet.</p>
        ) : (
          <ul className="mb-4 space-y-2">
            {project.unitTypes.map((unit) => (
              <li key={unit.id} className="flex items-center justify-between rounded-md border border-slate-100 px-3 py-2">
                <div>
                  <p className="text-sm font-medium text-slate-800">{unit.name}</p>
                  <p className="text-xs text-slate-500">
                    {unit.indicativePriceMin || unit.indicativePriceMax
                      ? `${unit.currency} ${unit.indicativePriceMin ?? "?"} – ${unit.indicativePriceMax ?? "?"}`
                      : "Price not set"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Select
                    value={unit.availabilityStatus}
                    onChange={(value) => handleUnitAvailabilityChange(unit.id, value)}
                    options={["AVAILABLE", "RESERVED", "SOLD", "COMING_SOON"].map((s) => ({ value: s, label: formatEnumLabel(s) }))}
                    className="w-40"
                    disabled={!canManage}
                  />
                  {canManage && (
                    <button
                      onClick={() => handleRemoveUnitType(unit.id)}
                      aria-label="Remove unit type"
                      className="rounded-md border border-red-200 p-1.5 text-red-600 transition hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        {canManage && (
          <form onSubmit={handleAddUnitType} className="flex flex-wrap items-end gap-2">
            <input
              placeholder="Unit type name"
              required
              value={unitName}
              onChange={(e) => setUnitName(e.target.value)}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
            />
            <input
              type="number"
              min={0}
              placeholder="Min price"
              value={unitMin}
              onChange={(e) => setUnitMin(e.target.value)}
              className="w-32 rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
            />
            <input
              type="number"
              min={0}
              placeholder="Max price"
              value={unitMax}
              onChange={(e) => setUnitMax(e.target.value)}
              className="w-32 rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
            />
            <button
              type="submit"
              disabled={addingUnit}
              className="flex items-center gap-1.5 rounded-md bg-[var(--color-brand)] px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
            >
              <Plus className="h-4 w-4" />
              Add
            </button>
          </form>
        )}
      </section>

      <ConfirmDialog
        open={confirmArchive}
        title="Archive this project?"
        description="Archived projects are hidden from new enquiries but existing leads keep their link to it."
        confirmLabel="Archive"
        onConfirm={handleArchive}
        onCancel={() => setConfirmArchive(false)}
      />
    </div>
  );
}
