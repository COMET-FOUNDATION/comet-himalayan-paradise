export type Role = "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "VIEWER" | "SALES_MANAGER" | "SALES_AGENT";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Folder {
  id: string;
  name: string;
  slug: string;
  path: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface FolderThumbnailAsset {
  id: string;
  publicUrl: string;
  altText: string | null;
  originalFilename: string;
}

export interface FolderWithStats extends Folder {
  assetCount: number;
  latestAsset: FolderThumbnailAsset | null;
}

export interface Asset {
  id: string;
  filename: string;
  originalFilename: string;
  storagePath: string;
  publicUrl: string;
  mimeType: string;
  size: number;
  folderId: string;
  useCase: string | null;
  altText: string | null;
  createdById: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface PaginatedAssets {
  items: Asset[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
}

export type ProjectStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
export type UnitAvailabilityStatus = "AVAILABLE" | "RESERVED" | "SOLD" | "COMING_SOON";
export type LeadStatus =
  | "NEW"
  | "UNDER_REVIEW"
  | "ASSIGNED"
  | "CONTACTED"
  | "SITE_VISIT_SCHEDULED"
  | "QUALIFIED"
  | "NEGOTIATION"
  | "RESERVED"
  | "CONVERTED"
  | "LOST"
  | "CLOSED";
export type LeadActivityType = "NOTE" | "STATUS_CHANGE" | "ASSIGNMENT" | "SITE_VISIT_SCHEDULED";
export type SiteVisitStatus = "SCHEDULED" | "COMPLETED" | "CANCELLED" | "RESCHEDULED";

export interface ProjectUnitType {
  id: string;
  projectId: string;
  name: string;
  specs: Record<string, unknown> | null;
  indicativePriceMin: string | null;
  indicativePriceMax: string | null;
  currency: string;
  availabilityStatus: UnitAvailabilityStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string | null;
  description: string | null;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
  unitTypes: ProjectUnitType[];
}

export interface PaginatedProjects {
  items: Project[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface LeadAssignee {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface LeadActivity {
  id: string;
  leadId: string;
  actorId: string | null;
  type: LeadActivityType;
  note: string | null;
  fromStatus: LeadStatus | null;
  toStatus: LeadStatus | null;
  createdAt: string;
  actor: { id: string; name: string } | null;
}

export interface SiteVisit {
  id: string;
  leadId: string;
  scheduledAt: string;
  status: SiteVisitStatus;
  notes: string | null;
  createdById: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Lead {
  id: string;
  reference: string;
  name: string;
  email: string | null;
  phone: string | null;
  areaOfInterest: string;
  message: string | null;
  status: LeadStatus;
  projectId: string | null;
  unitTypeId: string | null;
  assignedToId: string | null;
  nextFollowUpAt: string | null;
  createdAt: string;
  updatedAt: string;
  project: Project | null;
  unitType: ProjectUnitType | null;
  assignedTo: { id: string; name: string; email: string } | null;
}

export interface LeadDetail extends Lead {
  activities: LeadActivity[];
  siteVisits: SiteVisit[];
}

export interface PaginatedLeads {
  items: Lead[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
