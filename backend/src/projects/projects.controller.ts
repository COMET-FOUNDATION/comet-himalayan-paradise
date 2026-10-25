import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Project, ProjectUnitType, Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateUnitTypeDto } from './dto/create-unit-type.dto';
import { QueryProjectsDto } from './dto/query-projects.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UpdateUnitTypeDto } from './dto/update-unit-type.dto';
import { PaginatedProjects } from './entities/paginated-projects.entity';
import { ProjectsService } from './projects.service';

const VIEW_ROLES = [Role.SUPER_ADMIN, Role.ADMIN, Role.SALES_MANAGER, Role.SALES_AGENT];
const MANAGE_ROLES = [Role.SUPER_ADMIN, Role.ADMIN, Role.SALES_MANAGER];

@ApiTags('projects')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @Roles(...VIEW_ROLES)
  findAll(@Query() query: QueryProjectsDto): Promise<PaginatedProjects> {
    return this.projectsService.findAll(query);
  }

  @Get(':id')
  @Roles(...VIEW_ROLES)
  findOne(@Param('id') id: string) {
    return this.projectsService.findByIdOrThrow(id);
  }

  @Post()
  @Roles(...MANAGE_ROLES)
  create(@Body() dto: CreateProjectDto): Promise<Project> {
    return this.projectsService.create(dto);
  }

  @Patch(':id')
  @Roles(...MANAGE_ROLES)
  update(@Param('id') id: string, @Body() dto: UpdateProjectDto): Promise<Project> {
    return this.projectsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(...MANAGE_ROLES)
  archive(@Param('id') id: string): Promise<Project> {
    return this.projectsService.archive(id);
  }

  @Post(':id/unit-types')
  @Roles(...MANAGE_ROLES)
  addUnitType(@Param('id') id: string, @Body() dto: CreateUnitTypeDto): Promise<ProjectUnitType> {
    return this.projectsService.addUnitType(id, dto);
  }

  @Patch(':id/unit-types/:unitTypeId')
  @Roles(...MANAGE_ROLES)
  updateUnitType(
    @Param('id') id: string,
    @Param('unitTypeId') unitTypeId: string,
    @Body() dto: UpdateUnitTypeDto,
  ): Promise<ProjectUnitType> {
    return this.projectsService.updateUnitType(id, unitTypeId, dto);
  }

  @Delete(':id/unit-types/:unitTypeId')
  @Roles(...MANAGE_ROLES)
  async removeUnitType(@Param('id') id: string, @Param('unitTypeId') unitTypeId: string): Promise<{ message: string }> {
    await this.projectsService.removeUnitType(id, unitTypeId);
    return { message: 'Unit type deleted' };
  }
}
