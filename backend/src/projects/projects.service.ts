import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Project, ProjectStatus, ProjectUnitType } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateUnitTypeDto } from './dto/create-unit-type.dto';
import { QueryProjectsDto } from './dto/query-projects.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UpdateUnitTypeDto } from './dto/update-unit-type.dto';
import { PaginatedProjects } from './entities/paginated-projects.entity';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: QueryProjectsDto): Promise<PaginatedProjects> {
    const where: Prisma.ProjectWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { location: { contains: query.search, mode: 'insensitive' } },
        { slug: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const page = query.page ?? 1;
    const limit = query.limit ?? 25;

    const [items, total] = await Promise.all([
      this.prisma.project.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: { unitTypes: { orderBy: { createdAt: 'asc' } } },
      }),
      this.prisma.project.count({ where }),
    ]);

    return { items, total, page, limit, totalPages: Math.max(1, Math.ceil(total / limit)) };
  }

  async findByIdOrThrow(id: string): Promise<Project & { unitTypes: ProjectUnitType[] }> {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: { unitTypes: { orderBy: { createdAt: 'asc' } } },
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  async create(dto: CreateProjectDto): Promise<Project> {
    const existing = await this.prisma.project.findUnique({ where: { slug: dto.slug } });
    if (existing) throw new ConflictException('A project with this slug already exists');

    return this.prisma.project.create({
      data: {
        slug: dto.slug,
        name: dto.name,
        location: dto.location,
        description: dto.description,
        status: dto.status ?? ProjectStatus.DRAFT,
      },
    });
  }

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    await this.findByIdOrThrow(id);

    if (dto.slug) {
      const existing = await this.prisma.project.findUnique({ where: { slug: dto.slug } });
      if (existing && existing.id !== id) throw new ConflictException('A project with this slug already exists');
    }

    return this.prisma.project.update({ where: { id }, data: dto });
  }

  async archive(id: string): Promise<Project> {
    await this.findByIdOrThrow(id);
    return this.prisma.project.update({ where: { id }, data: { status: ProjectStatus.ARCHIVED } });
  }

  async addUnitType(projectId: string, dto: CreateUnitTypeDto): Promise<ProjectUnitType> {
    await this.findByIdOrThrow(projectId);
    this.assertPriceRange(dto.indicativePriceMin, dto.indicativePriceMax);

    return this.prisma.projectUnitType.create({
      data: {
        projectId,
        name: dto.name,
        specs: dto.specs as Prisma.InputJsonValue | undefined,
        indicativePriceMin: dto.indicativePriceMin,
        indicativePriceMax: dto.indicativePriceMax,
        currency: dto.currency ?? 'INR',
        availabilityStatus: dto.availabilityStatus,
      },
    });
  }

  async updateUnitType(projectId: string, unitTypeId: string, dto: UpdateUnitTypeDto): Promise<ProjectUnitType> {
    const unitType = await this.findUnitTypeOrThrow(projectId, unitTypeId);
    const currentMin = unitType.indicativePriceMin ? Number(unitType.indicativePriceMin) : undefined;
    const currentMax = unitType.indicativePriceMax ? Number(unitType.indicativePriceMax) : undefined;
    const nextMin = dto.indicativePriceMin ?? currentMin;
    const nextMax = dto.indicativePriceMax ?? currentMax;
    this.assertPriceRange(nextMin, nextMax);

    return this.prisma.projectUnitType.update({
      where: { id: unitTypeId },
      data: {
        name: dto.name,
        specs: dto.specs as Prisma.InputJsonValue | undefined,
        indicativePriceMin: dto.indicativePriceMin,
        indicativePriceMax: dto.indicativePriceMax,
        currency: dto.currency,
        availabilityStatus: dto.availabilityStatus,
      },
    });
  }

  async removeUnitType(projectId: string, unitTypeId: string): Promise<void> {
    await this.findUnitTypeOrThrow(projectId, unitTypeId);
    await this.prisma.projectUnitType.delete({ where: { id: unitTypeId } });
  }

  private async findUnitTypeOrThrow(projectId: string, unitTypeId: string): Promise<ProjectUnitType> {
    const unitType = await this.prisma.projectUnitType.findUnique({ where: { id: unitTypeId } });
    if (!unitType || unitType.projectId !== projectId) throw new NotFoundException('Unit type not found');
    return unitType;
  }

  private assertPriceRange(min?: number, max?: number): void {
    if (min !== undefined && max !== undefined && min > max) {
      throw new BadRequestException('indicativePriceMin cannot be greater than indicativePriceMax');
    }
  }
}
