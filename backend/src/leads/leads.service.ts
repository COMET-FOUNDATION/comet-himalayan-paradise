import { Injectable, Logger, ServiceUnavailableException, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { randomBytes, randomUUID } from 'node:crypto';
import { PrismaService } from '../database/prisma.service';
import { CreateLeadDto } from './dto/create-lead.dto';

function clean(value: string) {
  const withoutControls = [...value].filter((character) => {
    const code = character.charCodeAt(0);
    return code >= 32 && code !== 127;
  }).join('');
  return withoutControls.replace(/\s+/g, ' ').trim();
}

@Injectable()
export class LeadsService {
  private readonly logger = new Logger(LeadsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateLeadDto) {
    const name = clean(dto.name);
    const email = dto.email ? clean(dto.email).toLowerCase() : null;
    const phone = dto.phone ? clean(dto.phone) : null;
    const message = dto.message ? clean(dto.message) : null;
    if (name.length < 2) throw new BadRequestException('Enter a valid name.');
    if (!email && !phone) throw new BadRequestException('Provide a phone number or email address.');
    if (phone && phone.replace(/\D/g, '').length < 7) throw new BadRequestException('Enter a valid phone number.');

    try {
      const reference = `CHP-ENQ-${randomBytes(6).toString('hex').toUpperCase()}`;
      // Parameterized Prisma SQL avoids needing a regenerated client to access the
      // newly migrated table; ON CONFLICT makes retries idempotent and returns the
      // original reference for a duplicate form submission.
      const saved = await this.prisma.$queryRaw<Array<{ reference: string }>>(Prisma.sql`
        INSERT INTO "leads" (
          "id", "reference", "idempotencyKey", "name", "email", "phone",
          "areaOfInterest", "message", "consent", "consentedAt", "createdAt"
        ) VALUES (
          ${randomUUID()}, ${reference}, ${dto.idempotencyKey}, ${name}, ${email}, ${phone},
          ${dto.areaOfInterest}, ${message}, ${true}, ${new Date()}, ${new Date()}
        )
        ON CONFLICT ("idempotencyKey") DO UPDATE SET "idempotencyKey" = EXCLUDED."idempotencyKey"
        RETURNING "reference"
      `);
      if (!saved[0]?.reference) throw new Error('No lead reference returned');
      return saved[0];
    } catch {
      // Never log the DTO or database values: this record contains contact information.
      this.logger.error('Could not save a lead; personal details were omitted from the log.');
      throw new ServiceUnavailableException('We could not save the enquiry right now. Please try again later.');
    }
  }
}
