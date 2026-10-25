import { Lead, Project, ProjectUnitType } from '@prisma/client';

type AssignedToSummary = { id: string; name: string; email: string } | null;

export class PaginatedLeads {
  items!: (Lead & { project: Project | null; unitType: ProjectUnitType | null; assignedTo: AssignedToSummary })[];
  total!: number;
  page!: number;
  limit!: number;
  totalPages!: number;
}
