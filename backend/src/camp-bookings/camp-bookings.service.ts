import { Injectable, BadRequestException } from '@nestjs/common';
import { CampBookingStatus, Prisma } from '@prisma/client';
import { randomBytes } from 'node:crypto';
import { PrismaService } from '../database/prisma.service';
import { CreateCampBookingDto } from './dto/create-camp-booking.dto';

const validGroupTypes = new Set(['Family', 'Friends', 'Corporate', 'School/College', 'Other']);
const validContactMethods = new Set(['Email', 'Phone', 'WhatsApp']);
const dayMs = 24 * 60 * 60 * 1000;

function record(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function validDate(value: unknown): value is string {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
    && Number.isFinite(new Date(`${value}T00:00:00.000Z`).getTime())
    && new Date(`${value}T00:00:00.000Z`).toISOString().slice(0, 10) === value;
}

@Injectable()
export class CampBookingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCampBookingDto) {
    const existing = await this.prisma.campBooking.findUnique({ where: { idempotencyKey: dto.idempotencyKey } });
    if (existing) return { reference: existing.reference, status: existing.status, createdAt: existing.createdAt };

    const dates = this.validate(dto);
    const arrival = new Date(`${dto.arrivalDate}T00:00:00.000Z`);
    const departure = dto.departureDate ? new Date(`${dto.departureDate}T00:00:00.000Z`) : null;
    const reference = `CHP-${dto.arrivalDate.replaceAll('-', '')}-${randomBytes(8).toString('hex').toUpperCase()}`;

    try {
      const saved = await this.prisma.campBooking.create({
        data: {
          reference,
          idempotencyKey: dto.idempotencyKey,
          mode: dto.mode,
          status: CampBookingStatus.PENDING,
          arrivalDate: arrival,
          departureDate: departure,
          dates,
          participants: dto.participants as Prisma.InputJsonObject,
          activitySelections: dto.activitySelections as unknown as Prisma.InputJsonArray,
          accommodation: dto.accommodation === null ? Prisma.DbNull : dto.accommodation as Prisma.InputJsonObject,
          contact: dto.contact as Prisma.InputJsonObject,
          specialRequests: dto.specialRequests,
          termsAccepted: dto.termsAccepted,
        },
        select: { reference: true, status: true, createdAt: true },
      });
      return saved;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const duplicate = await this.prisma.campBooking.findUnique({ where: { idempotencyKey: dto.idempotencyKey } });
        if (duplicate) return { reference: duplicate.reference, status: duplicate.status, createdAt: duplicate.createdAt };
      }
      throw error;
    }
  }

  private validate(dto: CreateCampBookingDto): string[] {
    const fail = (message: string): never => { throw new BadRequestException(message); };
    if (!validDate(dto.arrivalDate)) fail('Choose a valid arrival date.');
    const departure = dto.departureDate ?? dto.arrivalDate;
    if (!validDate(departure) || departure < dto.arrivalDate) fail('Departure must be on or after arrival.');

    const arrivalTimestamp = Date.parse(`${dto.arrivalDate}T00:00:00.000Z`);
    const departureTimestamp = Date.parse(`${departure}T00:00:00.000Z`);
    const dayCount = (departureTimestamp - arrivalTimestamp) / dayMs + 1;
    if (!Array.isArray(dto.dates) || dto.dates.length !== dayCount) fail('Requested dates must be consecutive between arrival and departure.');
    const expected = dto.dates.map((_, index) => new Date(arrivalTimestamp + index * dayMs).toISOString().slice(0, 10));
    if (dto.dates.some((date, index) => date !== expected[index])) fail('Requested dates must be consecutive between arrival and departure.');

    const participants = dto.participants;
    if (!record(participants)) fail('Participant details are required.');
    const adults = participants.adults;
    const children = participants.children;
    const groupType = participants.groupType;
    if (!Number.isSafeInteger(adults) || (adults as number) < 0 || !Number.isSafeInteger(children) || (children as number) < 0 || (adults as number) + (children as number) < 1) fail('Participant counts are invalid.');
    if (typeof groupType !== 'string' || !validGroupTypes.has(groupType)) fail('Group type is invalid.');
    if ((groupType === 'Corporate' || groupType === 'School/College') && (typeof participants.organization !== 'string' || !participants.organization.trim())) fail('Organization name is required for this group type.');
    if ((participants.organization !== null && participants.organization !== undefined && (typeof participants.organization !== 'string' || participants.organization.length > 200)) || (participants.ageGroups !== null && participants.ageGroups !== undefined && (typeof participants.ageGroups !== 'string' || participants.ageGroups.length > 300))) fail('Participant notes are too long.');

    if (dto.mode === 'stay') {
      const accommodation = dto.accommodation;
      if (!record(accommodation)) throw new BadRequestException('Accommodation preferences are required for a stay request.');
      if (accommodation.rooms !== null && accommodation.rooms !== undefined && (!Number.isSafeInteger(accommodation.rooms) || (accommodation.rooms as number) < 1)) fail('Requested room count is invalid.');
      if (accommodation.guests !== null && accommodation.guests !== undefined && (!Number.isSafeInteger(accommodation.guests) || (accommodation.guests as number) < 1 || (accommodation.guests as number) > (adults as number) + (children as number))) fail('Accommodation guest count is invalid.');
      for (const field of ['preference', 'notes'] as const) if (accommodation[field] !== null && accommodation[field] !== undefined && (typeof accommodation[field] !== 'string' || accommodation[field].length > 1500)) fail('Accommodation notes are too long.');
    } else if (dto.accommodation !== null) {
      fail('Accommodation preferences are only valid for a stay request.');
    }

    if (!Array.isArray(dto.activitySelections) || dto.activitySelections.length !== expected.length) fail('Add activity selections for each date.');
    const seen = new Set<string>();
    for (const selection of dto.activitySelections) {
      if (!record(selection) || typeof selection.date !== 'string' || !expected.includes(selection.date) || seen.has(selection.date)) fail('Activity selection dates are invalid.');
      seen.add(selection.date as string);
      const selected = selection.activityIds;
      if (!Array.isArray(selected) || selected.length > 6 || selected.some((id) => typeof id !== 'string' || id.length < 1 || id.length > 100) || new Set(selected).size !== selected.length) fail('Choose no more than six distinct activities per day.');
    }

    const contact = dto.contact;
    if (!record(contact) || typeof contact.name !== 'string' || contact.name.trim().length < 2 || contact.name.length > 120) fail('Contact name is invalid.');
    if (typeof contact.email !== 'string' || contact.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) fail('Contact email is invalid.');
    if (typeof contact.phone !== 'string' || contact.phone.length > 40 || contact.phone.replace(/\D/g, '').length < 7) fail('Contact phone is invalid.');
    if (typeof contact.preferredMethod !== 'string' || !validContactMethods.has(contact.preferredMethod)) fail('Preferred contact method is invalid.');
    if (contact.city !== null && contact.city !== undefined && (typeof contact.city !== 'string' || contact.city.length > 200)) fail('City or country value is too long.');
    if (dto.termsAccepted !== true) fail('Booking acknowledgement is required.');
    return expected;
  }
}
