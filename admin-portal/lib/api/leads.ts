import { LeadAssignee, LeadDetail, LeadStatus, PaginatedLeads, SiteVisitStatus } from "../types";
import { apiClient } from "./client";

export interface QueryLeadsInput {
  status?: LeadStatus;
  projectId?: string;
  assignedToId?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface UpdateLeadInput {
  status?: LeadStatus;
  assignedToId?: string | null;
  projectId?: string | null;
  unitTypeId?: string | null;
  nextFollowUpAt?: string | null;
}

function toQueryString(input: object): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined && value !== "") params.set(key, String(value));
  }
  const query = params.toString();
  return query ? `?${query}` : "";
}

export const leadsApi = {
  list: (query: QueryLeadsInput = {}) => apiClient.get<PaginatedLeads>(`/leads${toQueryString(query)}`),
  get: (id: string) => apiClient.get<LeadDetail>(`/leads/${id}`),
  update: (id: string, input: UpdateLeadInput) => apiClient.patch<LeadDetail>(`/leads/${id}`, input),
  addNote: (id: string, note: string) => apiClient.post<LeadDetail>(`/leads/${id}/notes`, { note }),
  scheduleSiteVisit: (id: string, scheduledAt: string, notes?: string) =>
    apiClient.post<LeadDetail>(`/leads/${id}/site-visits`, { scheduledAt, notes }),
  updateSiteVisit: (id: string, visitId: string, input: { status?: SiteVisitStatus; scheduledAt?: string; notes?: string }) =>
    apiClient.patch<LeadDetail>(`/leads/${id}/site-visits/${visitId}`, input),
  listAssignees: () => apiClient.get<LeadAssignee[]>("/leads/assignees"),
};
