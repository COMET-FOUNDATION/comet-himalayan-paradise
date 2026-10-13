import { Equals, IsEmail, IsIn, IsOptional, IsString, IsUUID, MaxLength, MinLength, Matches } from 'class-validator';

export const leadInterests = [
  'Cottages',
  'Holiday camps',
  'Camp activities',
  'Facilities and amenities',
  'Treks and outdoor experiences',
  'Yoga and wellness',
  'Organic farming and Gauseva',
  'Other',
] as const;

export class CreateLeadDto {
  @IsUUID()
  idempotencyKey!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(120)
  name!: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(254)
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(40)
  @Matches(/^[+()\d\s.-]+$/)
  phone?: string;

  @IsIn(leadInterests)
  areaOfInterest!: (typeof leadInterests)[number];

  @IsOptional()
  @IsString()
  @MaxLength(1500)
  message?: string;

  @Equals(true)
  consent!: true;
}
