import { ApiPropertyOptional } from '@nestjs/swagger';
import { SiteVisitStatus } from '@prisma/client';
import { IsEnum, IsISO8601, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateSiteVisitDto {
  @ApiPropertyOptional({ enum: SiteVisitStatus })
  @IsOptional()
  @IsEnum(SiteVisitStatus)
  status?: SiteVisitStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsISO8601()
  scheduledAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;
}
