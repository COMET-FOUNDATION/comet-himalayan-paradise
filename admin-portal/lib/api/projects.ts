import { PaginatedProjects, Project, ProjectStatus, ProjectUnitType, UnitAvailabilityStatus } from "../types";
import { apiClient } from "./client";

export interface QueryProjectsInput {
  status?: ProjectStatus;
  search?: string;
  page?: number;
  limit?: number;
}

export interface CreateProjectInput {
  slug: string;
  name: string;
  location?: string;
  description?: string;
  status?: ProjectStatus;
}

export type UpdateProjectInput = Partial<CreateProjectInput>;

export interface UnitTypeInput {
  name: string;
  specs?: Record<string, unknown>;
  indicativePriceMin?: number;
  indicativePriceMax?: number;
  currency?: string;
  availabilityStatus?: UnitAvailabilityStatus;
}

function toQueryString(input: object): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined && value !== "") params.set(key, String(value));
  }
  const query = params.toString();
  return query ? `?${query}` : "";
}

export const projectsApi = {
  list: (query: QueryProjectsInput = {}) => apiClient.get<PaginatedProjects>(`/projects${toQueryString(query)}`),
  get: (id: string) => apiClient.get<Project>(`/projects/${id}`),
  create: (input: CreateProjectInput) => apiClient.post<Project>("/projects", input),
  update: (id: string, input: UpdateProjectInput) => apiClient.patch<Project>(`/projects/${id}`, input),
  archive: (id: string) => apiClient.delete<Project>(`/projects/${id}`),
  addUnitType: (projectId: string, input: UnitTypeInput) =>
    apiClient.post<ProjectUnitType>(`/projects/${projectId}/unit-types`, input),
  updateUnitType: (projectId: string, unitTypeId: string, input: Partial<UnitTypeInput>) =>
    apiClient.patch<ProjectUnitType>(`/projects/${projectId}/unit-types/${unitTypeId}`, input),
  removeUnitType: (projectId: string, unitTypeId: string) =>
    apiClient.delete<{ message: string }>(`/projects/${projectId}/unit-types/${unitTypeId}`),
};
