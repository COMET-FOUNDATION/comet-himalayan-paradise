"use client";

import { CalendarPlus, Send } from "lucide-react";
import { useParams } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { ErrorState } from "../../../../components/ErrorState";
import { PageHeader } from "../../../../components/PageHeader";
import { Select } from "../../../../components/Select";
import { Skeleton } from "../../../../components/Skeleton";
import { ApiError } from "../../../../lib/api/client";
import { leadsApi } from "../../../../lib/api/leads";
import { projectsApi } from "../../../../lib/api/projects";
import { useAuth } from "../../../../lib/auth-context";
import { formatEnumLabel, leadStatusColor } from "../../../../lib/format";
import { cn } from "../../../../lib/utils";
import { LeadAssignee, LeadDetail, LeadStatus, Project, SiteVisitStatus } from "../../../../lib/types";

const STATUSES: LeadStatus[] = [
  "NEW",
  "UNDER_REVIEW",
  "ASSIGNED",
  "CONTACTED",
  "SITE_VISIT_SCHEDULED",
  "QUALIFIED",
  "NEGOTIATION",
  "RESERVED",
  "CONVERTED",
  "LOST",
  "CLOSED",
];
const TERMINAL: LeadStatus[] = ["CONVERTED", "LOST", "CLOSED"];

export default function LeadDetailPage() {
  const params = useParams<{ id: string }>();
  const { user } = useAuth();

  const [lead, setLead] = useState<LeadDetail | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [assignees, setAssignees] = useState<LeadAssignee[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const [note, setNote] = useState("");
  const [addingNote, setAddingNote] = useState(false);
  const [visitDate, setVisitDate] = useState("");
  const [visitNotes, setVisitNotes] = useState("");
  const [schedulingVisit, setSchedulingVisit] = useState(false);
  const [followUp, setFollowUp] = useState("");

  const load = useCallback(() => {
    leadsApi
      .get(params.id)
      .then((data) => {
        setLead(data);
        setFollowUp(data.nextFollowUpAt ? data.nextFollowUpAt.slice(0, 10) : "");
        setError(null);
      })
      .catch((err) => setError(err instanceof ApiError ? err.message : "Failed to load lead."));
  }, [params.id]);

  useEffect(load, [load]);

  useEffect(() => {
    projectsApi.list({ limit: 100 }).then((data) => setProjects(data.items)).catch(() => undefined);
    leadsApi.listAssignees().then(setAssignees).catch(() => undefined);
  }, []);

  const isTerminal = lead ? TERMINAL.includes(lead.status) : false;
  const isSalesAgent = user?.role === "SALES_AGENT";

  async function runAction(action: () => Promise<LeadDetail>) {
    setActionError(null);
    try {
      const updated = await action();
      setLead(updated);
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "That action failed.");
    }
  }

  function handleStatusChange(status: string) {
    if (!lead) return;
    runAction(() => leadsApi.update(lead.id, { status: status as LeadStatus }));
  }

  function handleAssigneeChange(assignedToId: string) {
    if (!lead) return;
    runAction(() => leadsApi.update(lead.id, { assignedToId: assignedToId || null }));
  }

  function handleProjectChange(projectId: string) {
    if (!lead) return;
    runAction(() => leadsApi.update(lead.id, { projectId: projectId || null, unitTypeId: null }));
  }

  function handleUnitTypeChange(unitTypeId: string) {
    if (!lead) return;
    runAction(() => leadsApi.update(lead.id, { unitTypeId: unitTypeId || null }));
  }

  function handleFollowUpBlur() {
    if (!lead) return;
    const current = lead.nextFollowUpAt ? lead.nextFollowUpAt.slice(0, 10) : "";
    if (followUp === current) return;
    runAction(() => leadsApi.update(lead.id, { nextFollowUpAt: followUp ? new Date(followUp).toISOString() : null }));
  }

  async function handleAddNote(event: FormEvent) {
    event.preventDefault();
    if (!lead || !note.trim()) return;
    setAddingNote(true);
    setActionError(null);
    try {
      const updated = await leadsApi.addNote(lead.id, note.trim());
      setLead(updated);
      setNote("");
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "Could not add the note.");
    } finally {
      setAddingNote(false);
    }
  }

  async function handleScheduleVisit(event: FormEvent) {
    event.preventDefault();
    if (!lead || !visitDate) return;
    setSchedulingVisit(true);
    setActionError(null);
    try {
      const updated = await leadsApi.scheduleSiteVisit(lead.id, new Date(visitDate).toISOString(), visitNotes || undefined);
      setLead(updated);
      setVisitDate("");
      setVisitNotes("");
    } catch (err) {
      setActionError(err instanceof ApiError ? err.message : "Could not schedule the site visit.");
    } finally {
      setSchedulingVisit(false);
    }
  }

  function handleVisitStatusChange(visitId: string, status: string) {
    if (!lead) return;
    runAction(() => leadsApi.updateSiteVisit(lead.id, visitId, { status: status as SiteVisitStatus }));
  }

  if (error) return <ErrorState message={error} />;

  if (!lead) {
    return (
      <div>
        <PageHeader title="Lead" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    );
  }

  const selectedProject = lead.projectId ? projects.find((p) => p.id === lead.projectId) : undefined;
  const selectableAssignees = isSalesAgent && user ? assignees.filter((a) => a.id === user.id) : assignees;
  const assigneeOptions = [
    { value: "", label: isSalesAgent ? "Unassign" : "Unassigned" },
    ...selectableAssignees.map((a) => ({ value: a.id, label: `${a.name} (${formatEnumLabel(a.role)})` })),
  ];
  const statusOptions = STATUSES.map((s) => ({ value: s, label: formatEnumLabel(s) }));
  const projectOptions = [{ value: "", label: "No project" }, ...projects.map((p) => ({ value: p.id, label: p.name }))];
  const unitTypeOptions = [{ value: "", label: "No unit type" }, ...(selectedProject?.unitTypes ?? []).map((u) => ({ value: u.id, label: u.name }))];

  return (
    <div>
      <PageHeader
        title={lead.reference}
        action={
          <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", leadStatusColor(lead.status))}>
            {formatEnumLabel(lead.status)}
          </span>
        }
      />

      {actionError && <div className="mb-4"><ErrorState message={actionError} /></div>}
      {isTerminal && (
        <p className="mb-4 rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-500">
          This lead is {lead.status.toLowerCase()} and cannot be assigned, re-linked to a project, or moved to a new site visit.
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Enquiry details</h2>
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <Field label="Name" value={lead.name} />
              <Field label="Email" value={lead.email ?? "—"} />
              <Field label="Phone" value={lead.phone ?? "—"} />
              <Field label="Area of interest" value={lead.areaOfInterest} />
              <Field label="Received" value={new Date(lead.createdAt).toLocaleString()} />
              <Field label="Last updated" value={new Date(lead.updatedAt).toLocaleString()} />
            </dl>
            {lead.message && (
              <div className="mt-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Message</dt>
                <dd className="mt-1 whitespace-pre-wrap text-sm text-slate-700">{lead.message}</dd>
              </div>
            )}
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Activity timeline</h2>
            {lead.activities.length === 0 ? (
              <p className="text-sm text-slate-400">No activity recorded yet.</p>
            ) : (
              <ul className="space-y-3">
                {lead.activities.map((activity) => (
                  <li key={activity.id} className="border-l-2 border-slate-200 pl-3">
                    <p className="text-sm text-slate-700">
                      {activity.type === "STATUS_CHANGE" && activity.toStatus
                        ? `Status changed to ${formatEnumLabel(activity.toStatus)}`
                        : activity.note}
                    </p>
                    <p className="text-xs text-slate-400">
                      {activity.actor ? `${activity.actor.name} · ` : ""}
                      {new Date(activity.createdAt).toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            <form onSubmit={handleAddNote} className="mt-4 flex gap-2">
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Log a call or add a note…"
                className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
              />
              <button
                type="submit"
                disabled={addingNote || !note.trim()}
                className="flex items-center gap-1.5 rounded-md bg-[var(--color-brand)] px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                Add
              </button>
            </form>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Site visits</h2>
            {lead.siteVisits.length === 0 ? (
              <p className="text-sm text-slate-400">No site visits scheduled.</p>
            ) : (
              <ul className="mb-4 space-y-2">
                {lead.siteVisits.map((visit) => (
                  <li key={visit.id} className="flex items-center justify-between rounded-md border border-slate-100 px-3 py-2">
                    <div>
                      <p className="text-sm font-medium text-slate-800">{new Date(visit.scheduledAt).toLocaleString()}</p>
                      {visit.notes && <p className="text-xs text-slate-500">{visit.notes}</p>}
                    </div>
                    <Select
                      value={visit.status}
                      onChange={(value) => handleVisitStatusChange(visit.id, value)}
                      options={["SCHEDULED", "COMPLETED", "CANCELLED", "RESCHEDULED"].map((s) => ({ value: s, label: formatEnumLabel(s) }))}
                      className="w-40"
                    />
                  </li>
                ))}
              </ul>
            )}

            {!isTerminal && (
              <form onSubmit={handleScheduleVisit} className="flex flex-wrap items-end gap-2">
                <div>
                  <label className="block text-xs font-medium text-slate-500">Date &amp; time</label>
                  <input
                    type="datetime-local"
                    required
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="mt-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
                  />
                </div>
                <input
                  value={visitNotes}
                  onChange={(e) => setVisitNotes(e.target.value)}
                  placeholder="Notes (optional)"
                  className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={schedulingVisit}
                  className="flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 disabled:opacity-60"
                >
                  <CalendarPlus className="h-4 w-4" />
                  Schedule
                </button>
              </form>
            )}
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Pipeline</h2>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-xs font-medium text-slate-500">Status</label>
                <Select value={lead.status} onChange={handleStatusChange} options={statusOptions} className="mt-1" disabled={isTerminal} />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500">Assigned to</label>
                <Select value={lead.assignedToId ?? ""} onChange={handleAssigneeChange} options={assigneeOptions} className="mt-1" disabled={isTerminal} />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500">Next follow-up</label>
                <input
                  type="date"
                  value={followUp}
                  onChange={(e) => setFollowUp(e.target.value)}
                  onBlur={handleFollowUpBlur}
                  disabled={isTerminal}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none disabled:bg-slate-50"
                />
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Project</h2>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-xs font-medium text-slate-500">Project</label>
                <Select value={lead.projectId ?? ""} onChange={handleProjectChange} options={projectOptions} className="mt-1" disabled={isTerminal} />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500">Unit type</label>
                <Select
                  value={lead.unitTypeId ?? ""}
                  onChange={handleUnitTypeChange}
                  options={unitTypeOptions}
                  className="mt-1"
                  disabled={isTerminal || !lead.projectId}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-0.5 text-slate-700">{value}</dd>
    </div>
  );
}
