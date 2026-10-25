import { ApiPropertyOptional } from '@nestjs/swagger';
import { LeadStatus } from '@prisma/client';
import { IsEnum, IsISO8601, IsOptional, IsUUID, ValidateIf } from 'class-validator';

export class UpdateLeadDto {
  @ApiPropertyOptional({ enum: LeadStatus })
  @IsOptional()
  @IsEnum(LeadStatus)
  status?: LeadStatus;

  @ApiPropertyOptional({ description: 'Set to null to unassign' })
  @IsOptional()
  @ValidateIf((_, value) => value !== null)
  @IsUUID()
  assignedToId?: string | null;

  @ApiPropertyOptional({ description: 'Set to null to unlink from a project' })
  @IsOptional()
  @ValidateIf((_, value) => value !== null)
  @IsUUID()
  projectId?: string | null;

  @ApiPropertyOptional({ description: 'Set to null to unlink from a unit type' })
  @IsOptional()
  @ValidateIf((_, value) => value !== null)
  @IsUUID()
  unitTypeId?: string | null;

  @ApiPropertyOptional({ description: 'Set to null to clear the follow-up date' })
  @IsOptional()
  @ValidateIf((_, value) => value !== null)
  @IsISO8601()
  nextFollowUpAt?: string | null;
}
