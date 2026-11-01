import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class SelectedTrekDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  trekId!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(200)
  trekName!: string;
}

export class CreateTrekEnquiryDto {
  @IsUUID()
  idempotencyKey!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(50)
  @ValidateNested({ each: true })
  @Type(() => SelectedTrekDto)
  selectedTreks!: SelectedTrekDto[];

  @IsDateString({ strict: true })
  arrivalDate!: string;

  @IsDateString({ strict: true })
  departureDate!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName!: string;

  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsString()
  @MinLength(7)
  @MaxLength(40)
  mobile!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  country!: string;

  @IsIn(['Email', 'Phone', 'WhatsApp'])
  preferredContactMethod!: 'Email' | 'Phone' | 'WhatsApp';

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  specialRequests?: string;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  additionalInformation?: string;

  @IsBoolean()
  consent!: boolean;
}
