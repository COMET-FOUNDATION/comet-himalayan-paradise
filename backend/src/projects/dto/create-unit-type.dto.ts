import { ApiPropertyOptional } from '@nestjs/swagger';
import { UnitAvailabilityStatus } from '@prisma/client';
import { IsEnum, IsNumber, IsObject, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class CreateUnitTypeDto {
  @IsString()
  @MinLength(1)
  @MaxLength(150)
  name!: string;

  @ApiPropertyOptional({ description: 'Free-form specs such as bedrooms, area, floors' })
  @IsOptional()
  @IsObject()
  specs?: Record<string, unknown>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  indicativePriceMin?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  indicativePriceMax?: number;

  @ApiPropertyOptional({ default: 'INR' })
  @IsOptional()
  @IsString()
  @MaxLength(3)
  currency?: string;

  @ApiPropertyOptional({ enum: UnitAvailabilityStatus })
  @IsOptional()
  @IsEnum(UnitAvailabilityStatus)
  availabilityStatus?: UnitAvailabilityStatus;
}
