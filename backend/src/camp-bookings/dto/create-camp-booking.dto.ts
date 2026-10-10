import { IsArray, IsBoolean, IsDateString, IsIn, IsObject, IsString, IsUUID, MaxLength, ValidateIf } from 'class-validator';

export class CreateCampBookingDto {
  @IsUUID()
  idempotencyKey!: string;

  @IsIn(['activities', 'stay'])
  mode!: 'activities' | 'stay';

  @IsDateString({ strict: true })
  arrivalDate!: string;

  @ValidateIf((_object, value) => value !== null)
  @IsDateString({ strict: true })
  departureDate!: string | null;

  @IsArray()
  @IsDateString({ strict: true }, { each: true })
  dates!: string[];

  @IsObject()
  participants!: Record<string, unknown>;

  @IsArray()
  @IsObject({ each: true })
  activitySelections!: Record<string, unknown>[];

  @ValidateIf((_object, value) => value !== null)
  @IsObject()
  accommodation!: Record<string, unknown> | null;

  @IsObject()
  contact!: Record<string, unknown>;

  @ValidateIf((_object, value) => value !== null)
  @IsString()
  @MaxLength(4000)
  specialRequests!: string | null;

  @IsBoolean()
  termsAccepted!: boolean;
}
