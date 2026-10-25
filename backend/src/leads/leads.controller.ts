import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { AddLeadNoteDto } from './dto/add-lead-note.dto';
import { CreateLeadDto } from './dto/create-lead.dto';
import { CreateSiteVisitDto } from './dto/create-site-visit.dto';
import { QueryLeadsDto } from './dto/query-leads.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { UpdateSiteVisitDto } from './dto/update-site-visit.dto';
import { PaginatedLeads } from './entities/paginated-leads.entity';
import { LeadSubmissionKeyGuard } from './lead-submission-key.guard';
import { LeadsService } from './leads.service';

const STAFF_ROLES = [Role.SUPER_ADMIN, Role.ADMIN, Role.SALES_MANAGER, Role.SALES_AGENT];

@ApiTags('leads')
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  @ApiExcludeEndpoint()
  @UseGuards(LeadSubmissionKeyGuard)
  create(@Body() dto: CreateLeadDto) {
    return this.leadsService.create(dto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(...STAFF_ROLES)
  findAll(@Query() query: QueryLeadsDto, @CurrentUser() user: AuthenticatedUser): Promise<PaginatedLeads> {
    return this.leadsService.findAll(query, user);
  }

  @Get('assignees')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(...STAFF_ROLES)
  listAssignees() {
    return this.leadsService.listAssignableStaff();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(...STAFF_ROLES)
  findOne(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.leadsService.findByIdOrThrow(id, user);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(...STAFF_ROLES)
  update(@Param('id') id: string, @Body() dto: UpdateLeadDto, @CurrentUser() user: AuthenticatedUser) {
    return this.leadsService.update(id, dto, user);
  }

  @Post(':id/notes')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(...STAFF_ROLES)
  addNote(@Param('id') id: string, @Body() dto: AddLeadNoteDto, @CurrentUser() user: AuthenticatedUser) {
    return this.leadsService.addNote(id, dto, user);
  }

  @Post(':id/site-visits')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(...STAFF_ROLES)
  scheduleSiteVisit(@Param('id') id: string, @Body() dto: CreateSiteVisitDto, @CurrentUser() user: AuthenticatedUser) {
    return this.leadsService.scheduleSiteVisit(id, dto, user);
  }

  @Patch(':id/site-visits/:visitId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(...STAFF_ROLES)
  updateSiteVisit(
    @Param('id') id: string,
    @Param('visitId') visitId: string,
    @Body() dto: UpdateSiteVisitDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.leadsService.updateSiteVisit(id, visitId, dto, user);
  }
}
