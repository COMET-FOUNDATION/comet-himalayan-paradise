import { Project, ProjectUnitType } from '@prisma/client';

export class PaginatedProjects {
  items!: (Project & { unitTypes: ProjectUnitType[] })[];
  total!: number;
  page!: number;
  limit!: number;
  totalPages!: number;
}
