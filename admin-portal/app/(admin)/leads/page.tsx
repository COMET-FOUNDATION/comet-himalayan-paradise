"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { DataTable } from "../../../components/DataTable";
import { EmptyState } from "../../../components/EmptyState";
import { ErrorState } from "../../../components/ErrorState";
import { PageHeader } from "../../../components/PageHeader";
import { Select } from "../../../components/Select";
import { leadsApi } from "../../../lib/api/leads";
import { projectsApi } from "../../../lib/api/projects";
import { useAuth } from "../../../lib/auth-context";
import { formatEnumLabel, leadStatusColor } from "../../../lib/format";
import { cn } from "../../../lib/utils";
import { Lead, LeadStatus, PaginatedLeads, Project } from "../../../lib/types";

const PAGE_SIZE = 25;
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

export default function LeadsPage() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState("");
  const [projectId, setProjectId] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<PaginatedLeads | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    projectsApi
      .list({ limit: 100 })
      .then((data) => setProjects(data.items))
      .catch(() => undefined);
  }, []);

  const load = useCallback(() => {
    leadsApi
      .list({ status: (status as LeadStatus) || undefined, projectId: projectId || undefined, search: search || undefined, page, limit: PAGE_SIZE })
      .then((data) => {
        setResult(data);
        setError(null);
      })
      .catch(() => setError("Failed to load leads."));
  }, [status, projectId, search, page]);

  useEffect(() => {
    load();
  }, [load]);

  const statusOptions = [{ value: "", label: "All statuses" }, ...STATUSES.map((s) => ({ value: s, label: formatEnumLabel(s) }))];
  const projectOptions = [{ value: "", label: "All projects" }, ...projects.map((p) => ({ value: p.id, label: p.name }))];

  return (
    <div>
      <PageHeader title={user?.role === "SALES_AGENT" ? "My Leads" : "Leads"} />

      <div className="mb-4 flex flex-wrap gap-3">
        <div className="relative w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search name, email, phone, reference…"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm shadow-sm focus:border-[var(--color-brand)] focus:outline-none"
          />
        </div>
        <Select
          value={status}
          onChange={(value) => {
            setPage(1);
            setStatus(value);
          }}
          options={statusOptions}
          className="w-52"
        />
        <Select
          value={projectId}
          onChange={(value) => {
            setPage(1);
            setProjectId(value);
          }}
          options={projectOptions}
          className="w-56"
        />
      </div>

      {error && <ErrorState message={error} />}

      {!error && result && result.items.length === 0 && (
        <EmptyState title="No leads found" description="Try a different filter or wait for new enquiries to come in." />
      )}

      {!error && result && result.items.length > 0 && (
        <>
          <DataTable
            rows={result.items}
            loading={false}
            rowKey={(lead) => lead.id}
            columns={[
              {
                header: "Reference",
                cell: (lead: Lead) => (
                  <Link href={`/leads/${lead.id}`} className="font-medium text-[var(--color-brand)] hover:underline">
                    {lead.reference}
                  </Link>
                ),
              },
              {
                header: "Name",
                cell: (lead: Lead) => (
                  <div>
                    <p className="font-medium text-slate-800">{lead.name}</p>
                    <p className="text-xs text-slate-500">{lead.email || lead.phone}</p>
                  </div>
                ),
              },
              { header: "Area of interest", cell: (lead: Lead) => <span className="text-slate-600">{lead.areaOfInterest}</span> },
              {
                header: "Project",
                cell: (lead: Lead) => <span className="text-slate-600">{lead.project ? lead.project.name : "—"}</span>,
              },
              {
                header: "Status",
                cell: (lead: Lead) => (
                  <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", leadStatusColor(lead.status))}>
                    {formatEnumLabel(lead.status)}
                  </span>
                ),
              },
              {
                header: "Assigned to",
                cell: (lead: Lead) => <span className="text-slate-600">{lead.assignedTo ? lead.assignedTo.name : "Unassigned"}</span>,
              },
              {
                header: "Received",
                cell: (lead: Lead) => <span className="text-slate-500">{new Date(lead.createdAt).toLocaleDateString()}</span>,
              },
            ]}
          />

          <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
            <span>
              Page {result.page} of {result.totalPages} ({result.total} total)
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={result.page <= 1}
                className="rounded-md border border-slate-200 px-3 py-1.5 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => Math.min(result.totalPages, p + 1))}
                disabled={result.page >= result.totalPages}
                className="rounded-md border border-slate-200 px-3 py-1.5 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
