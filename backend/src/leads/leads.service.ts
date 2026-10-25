import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { Lead, LeadActivityType, LeadStatus, Prisma, Role, SiteVisitStatus } from '@prisma/client';
import { randomBytes } from 'node:crypto';
import { PrismaService } from '../database/prisma.service';
import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { AddLeadNoteDto } from './dto/add-lead-note.dto';
import { CreateLeadDto } from './dto/create-lead.dto';
import { CreateSiteVisitDto } from './dto/create-site-visit.dto';
import { QueryLeadsDto } from './dto/query-leads.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { UpdateSiteVisitDto } from './dto/update-site-visit.dto';
import { PaginatedLeads } from './entities/paginated-leads.entity';

const TERMINAL_STATUSES: LeadStatus[] = [LeadStatus.CONVERTED, LeadStatus.LOST, LeadStatus.CLOSED];
const EARLY_STATUSES: LeadStatus[] = [LeadStatus.NEW, LeadStatus.UNDER_REVIEW];
const ASSIGNABLE_ROLES: Role[] = [Role.SUPER_ADMIN, Role.ADMIN, Role.SALES_MANAGER, Role.SALES_AGENT];

const LEAD_DETAIL_INCLUDE = {
  project: true,
  unitType: true,
  assignedTo: { select: { id: true, name: true, email: true } },
  activities: { orderBy: { createdAt: 'desc' as const }, include: { actor: { select: { id: true, name: true } } } },
  siteVisits: { orderBy: { scheduledAt: 'desc' as const } },
};

function clean(value: string) {
  const withoutControls = [...value]
    .filter((character) => {
      const code = character.charCodeAt(0);
      return code >= 32 && code !== 127;
    })
    .join('');
  return withoutControls.replace(/\s+/g, ' ').trim();
}

@Injectable()
export class LeadsService {
  private readonly logger = new Logger(LeadsService.name);

  constructor(private readonly prisma: PrismaService) {}

  /** Public, key-gated capture endpoint. Unchanged behaviour: idempotent on retry, returns only the reference. */
  async create(dto: CreateLeadDto): Promise<{ reference: string }> {
    const name = clean(dto.name);
    const email = dto.email ? clean(dto.email).toLowerCase() : null;
    const phone = dto.phone ? clean(dto.phone) : null;
    const message = dto.message ? clean(dto.message) : null;
    if (name.length < 2) throw new BadRequestException('Enter a valid name.');
    if (!email && !phone) throw new BadRequestException('Provide a phone number or email address.');
    if (phone && phone.replace(/\D/g, '').length < 7) throw new BadRequestException('Enter a valid phone number.');

    try {
      const reference = `CHP-ENQ-${randomBytes(6).toString('hex').toUpperCase()}`;
      const lead = await this.prisma.lead.upsert({
        where: { idempotencyKey: dto.idempotencyKey },
        update: { idempotencyKey: dto.idempotencyKey },
        create: {
          reference,
          idempotencyKey: dto.idempotencyKey,
          name,
          email,
          phone,
          areaOfInterest: dto.areaOfInterest,
          message,
          consent: true,
          consentedAt: new Date(),
        },
      });
      return { reference: lead.reference };
    } catch {
      // Never log the DTO or database values: this record contains contact information.
      this.logger.error('Could not save a lead; personal details were omitted from the log.');
      throw new ServiceUnavailableException('We could not save the enquiry right now. Please try again later.');
    }
  }

  async findAll(query: QueryLeadsDto, actor: AuthenticatedUser): Promise<PaginatedLeads> {
    const where: Prisma.LeadWhereInput = {};
    if (actor.role === Role.SALES_AGENT) {
      where.assignedToId = actor.id;
    } else if (query.assignedToId) {
      where.assignedToId = query.assignedToId;
    }
    if (query.status) where.status = query.status;
    if (query.projectId) where.projectId = query.projectId;
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { email: { contains: query.search, mode: 'insensitive' } },
        { phone: { contains: query.search, mode: 'insensitive' } },
        { reference: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const page = query.page ?? 1;
    const limit = query.limit ?? 25;

    const [items, total] = await Promise.all([
      this.prisma.lead.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: { project: true, unitType: true, assignedTo: { select: { id: true, name: true, email: true } } },
      }),
      this.prisma.lead.count({ where }),
    ]);

    return { items, total, page, limit, totalPages: Math.max(1, Math.ceil(total / limit)) };
  }

  async listAssignableStaff() {
    return this.prisma.user.findMany({
      where: { role: { in: ASSIGNABLE_ROLES }, isActive: true },
      select: { id: true, name: true, email: true, role: true },
      orderBy: { name: 'asc' },
    });
  }

  async findByIdOrThrow(id: string, actor: AuthenticatedUser) {
    const lead = await this.prisma.lead.findUnique({ where: { id }, include: LEAD_DETAIL_INCLUDE });
    if (!lead) throw new NotFoundException('Lead not found');
    this.assertVisible(lead, actor);
    return lead;
  }

  async update(id: string, dto: UpdateLeadDto, actor: AuthenticatedUser) {
    const lead = await this.findLeadForActorOrThrow(id, actor);

    if ((dto.status || dto.assignedToId !== undefined) && TERMINAL_STATUSES.includes(lead.status)) {
      throw new BadRequestException(`This lead is ${lead.status.toLowerCase()} and cannot be changed further.`);
    }
    if (actor.role === Role.SALES_AGENT && dto.assignedToId !== undefined && dto.assignedToId !== actor.id) {
      throw new ForbiddenException('Sales agents can only reassign a lead to themselves.');
    }

    let assignedUserName: string | null = null;
    if (dto.assignedToId) {
      const assignedUser = await this.prisma.user.findUnique({ where: { id: dto.assignedToId } });
      if (!assignedUser || !ASSIGNABLE_ROLES.includes(assignedUser.role) || !assignedUser.isActive) {
        throw new BadRequestException('Leads can only be assigned to an active sales staff account.');
      }
      assignedUserName = assignedUser.name;
    }

    const targetProjectId = dto.projectId === undefined ? lead.projectId : dto.projectId;
    if (dto.projectId) {
      const project = await this.prisma.project.findUnique({ where: { id: dto.projectId } });
      if (!project) throw new BadRequestException('Project not found.');
    }
    if (dto.unitTypeId) {
      const unitType = await this.prisma.projectUnitType.findUnique({ where: { id: dto.unitTypeId } });
      if (!unitType || unitType.projectId !== targetProjectId) {
        throw new BadRequestException('Unit type does not belong to the selected project.');
      }
    }

    const data: Prisma.LeadUncheckedUpdateInput = {};
    const activities: Prisma.LeadActivityCreateManyLeadInput[] = [];

    if (dto.status && dto.status !== lead.status) {
      data.status = dto.status;
      activities.push({
        actorId: actor.id,
        type: LeadActivityType.STATUS_CHANGE,
        fromStatus: lead.status,
        toStatus: dto.status,
      });
    }
    if (dto.assignedToId !== undefined && dto.assignedToId !== lead.assignedToId) {
      data.assignedToId = dto.assignedToId;
      activities.push({
        actorId: actor.id,
        type: LeadActivityType.ASSIGNMENT,
        note: dto.assignedToId ? `Assigned to ${assignedUserName}` : 'Unassigned',
      });
      if (!dto.status && dto.assignedToId && EARLY_STATUSES.includes(lead.status)) {
        data.status = LeadStatus.ASSIGNED;
        activities.push({
          actorId: actor.id,
          type: LeadActivityType.STATUS_CHANGE,
          fromStatus: lead.status,
          toStatus: LeadStatus.ASSIGNED,
        });
      }
    }
    if (dto.projectId !== undefined) data.projectId = dto.projectId;
    if (dto.unitTypeId !== undefined) data.unitTypeId = dto.unitTypeId;
    if (dto.nextFollowUpAt !== undefined) {
      data.nextFollowUpAt = dto.nextFollowUpAt ? new Date(dto.nextFollowUpAt) : null;
    }

    if (Object.keys(data).length > 0) {
      await this.prisma.$transaction(async (tx) => {
        await tx.lead.update({ where: { id }, data });
        if (activities.length > 0) {
          await tx.leadActivity.createMany({ data: activities.map((activity) => ({ ...activity, leadId: id })) });
        }
      });
    }

    return this.findByIdOrThrow(id, actor);
  }

  async addNote(id: string, dto: AddLeadNoteDto, actor: AuthenticatedUser) {
    const lead = await this.findLeadForActorOrThrow(id, actor);
    await this.prisma.leadActivity.create({
      data: { leadId: lead.id, actorId: actor.id, type: LeadActivityType.NOTE, note: clean(dto.note) },
    });
    return this.findByIdOrThrow(id, actor);
  }

  async scheduleSiteVisit(id: string, dto: CreateSiteVisitDto, actor: AuthenticatedUser) {
    const lead = await this.findLeadForActorOrThrow(id, actor);
    if (TERMINAL_STATUSES.includes(lead.status)) {
      throw new BadRequestException(`This lead is ${lead.status.toLowerCase()} and cannot be moved further.`);
    }

    const scheduledAt = new Date(dto.scheduledAt);
    if (Number.isNaN(scheduledAt.getTime())) throw new BadRequestException('Invalid scheduledAt date.');

    await this.prisma.$transaction(async (tx) => {
      await tx.siteVisit.create({
        data: {
          leadId: lead.id,
          scheduledAt,
          notes: dto.notes ? clean(dto.notes) : null,
          createdById: actor.id,
        },
      });
      await tx.leadActivity.create({
        data: {
          leadId: lead.id,
          actorId: actor.id,
          type: LeadActivityType.SITE_VISIT_SCHEDULED,
          fromStatus: lead.status,
          toStatus: LeadStatus.SITE_VISIT_SCHEDULED,
        },
      });
      if (lead.status !== LeadStatus.SITE_VISIT_SCHEDULED) {
        await tx.lead.update({ where: { id: lead.id }, data: { status: LeadStatus.SITE_VISIT_SCHEDULED } });
      }
    });

    return this.findByIdOrThrow(id, actor);
  }

  async updateSiteVisit(id: string, visitId: string, dto: UpdateSiteVisitDto, actor: AuthenticatedUser) {
    const lead = await this.findLeadForActorOrThrow(id, actor);
    const visit = await this.prisma.siteVisit.findUnique({ where: { id: visitId } });
    if (!visit || visit.leadId !== lead.id) throw new NotFoundException('Site visit not found');

    await this.prisma.siteVisit.update({
      where: { id: visitId },
      data: {
        status: dto.status,
        scheduledAt: dto.scheduledAt ? new Date(dto.scheduledAt) : undefined,
        notes: dto.notes !== undefined ? clean(dto.notes) : undefined,
      },
    });

    if (dto.status && dto.status !== visit.status) {
      await this.prisma.leadActivity.create({
        data: {
          leadId: lead.id,
          actorId: actor.id,
          type: LeadActivityType.NOTE,
          note: `Site visit ${this.describeSiteVisitStatus(dto.status)}`,
        },
      });
    }

    return this.findByIdOrThrow(id, actor);
  }

  private describeSiteVisitStatus(status: SiteVisitStatus): string {
    switch (status) {
      case SiteVisitStatus.COMPLETED:
        return 'marked completed';
      case SiteVisitStatus.CANCELLED:
        return 'cancelled';
      case SiteVisitStatus.RESCHEDULED:
        return 'rescheduled';
      default:
        return 'updated';
    }
  }

  private async findLeadForActorOrThrow(id: string, actor: AuthenticatedUser): Promise<Lead> {
    const lead = await this.prisma.lead.findUnique({ where: { id } });
    if (!lead) throw new NotFoundException('Lead not found');
    this.assertVisible(lead, actor);
    return lead;
  }

  private assertVisible(lead: { assignedToId: string | null }, actor: AuthenticatedUser): void {
    if (actor.role === Role.SALES_AGENT && lead.assignedToId !== actor.id) {
      throw new ForbiddenException('This lead is not assigned to you.');
    }
  }
}
