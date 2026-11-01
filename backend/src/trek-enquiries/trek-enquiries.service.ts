import { BadRequestException, Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { Prisma, TrekEnquiryContactMethod } from '@prisma/client';
import { randomBytes } from 'node:crypto';
import { PrismaService } from '../database/prisma.service';
import { CreateTrekEnquiryDto } from './dto/create-trek-enquiry.dto';

const preferredMethods: Record<CreateTrekEnquiryDto['preferredContactMethod'], TrekEnquiryContactMethod> = {
  Email: TrekEnquiryContactMethod.EMAIL,
  Phone: TrekEnquiryContactMethod.PHONE,
  WhatsApp: TrekEnquiryContactMethod.WHATSAPP,
};

function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function todayInIndia(): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function clean(value: string): string {
  return [...value]
    .filter((character) => {
      const code = character.charCodeAt(0);
      return code >= 32 && code !== 127;
    })
    .join('')
    .trim();
}

@Injectable()
export class TrekEnquiriesService {
  private readonly logger = new Logger(TrekEnquiriesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTrekEnquiryDto): Promise<{ reference: string; createdAt: Date }> {
    const selectedTreks = dto.selectedTreks.map((trek) => ({
      trekId: clean(trek.trekId),
      trekName: clean(trek.trekName),
    }));
    if (selectedTreks.some((trek) => !trek.trekId || trek.trekName.length < 2)) {
      throw new BadRequestException('Choose valid treks.');
    }
    if (new Set(selectedTreks.map((trek) => trek.trekId)).size !== selectedTreks.length) {
      throw new BadRequestException('A trek can only be selected once.');
    }

    const arrivalDate = dto.arrivalDate;
    const departureDate = dto.departureDate;
    if (!isValidIsoDate(arrivalDate) || arrivalDate < todayInIndia()) {
      throw new BadRequestException('Choose an arrival date that is today or later.');
    }
    if (!isValidIsoDate(departureDate) || departureDate <= arrivalDate) {
      throw new BadRequestException('Departure date must be later than arrival date.');
    }
    if (dto.consent !== true) throw new BadRequestException('Please confirm CHP may contact you about this enquiry.');

    const existing = await this.prisma.trekEnquiry.findUnique({
      where: { idempotencyKey: dto.idempotencyKey },
      select: { reference: true, createdAt: true },
    });
    if (existing) return existing;

    const fullName = clean(dto.fullName);
    const email = clean(dto.email).toLowerCase();
    const mobile = clean(dto.mobile);
    const country = clean(dto.country);
    if (fullName.length < 2 || !email || mobile.replace(/\D/g, '').length < 7 || country.length < 2) {
      throw new BadRequestException('Check your contact details and try again.');
    }

    const reference = `CHP-TREK-${arrivalDate.replaceAll('-', '')}-${randomBytes(6).toString('hex').toUpperCase()}`;
    try {
      const saved = await this.prisma.trekEnquiry.create({
        data: {
          reference,
          idempotencyKey: dto.idempotencyKey,
          arrivalDate: new Date(`${arrivalDate}T00:00:00.000Z`),
          departureDate: new Date(`${departureDate}T00:00:00.000Z`),
          fullName,
          email,
          mobile,
          country,
          preferredContactMethod: preferredMethods[dto.preferredContactMethod],
          specialRequests: dto.specialRequests ? clean(dto.specialRequests) : null,
          additionalInformation: dto.additionalInformation ? clean(dto.additionalInformation) : null,
          consent: true,
          consentedAt: new Date(),
          selections: {
            create: selectedTreks.map((trek, position) => ({ ...trek, position })),
          },
        },
        select: { reference: true, createdAt: true },
      });
      return saved;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const duplicate = await this.prisma.trekEnquiry.findUnique({
          where: { idempotencyKey: dto.idempotencyKey },
          select: { reference: true, createdAt: true },
        });
        if (duplicate) return duplicate;
      }
      // Do not log DTOs or PII.
      this.logger.error('Could not save a trek enquiry; personal details were omitted from the log.');
      throw new ServiceUnavailableException('We could not save your trek enquiry right now. Please try again shortly.');
    }
  }
}
