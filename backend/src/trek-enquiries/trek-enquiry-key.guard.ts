import { CanActivate, ExecutionContext, ForbiddenException, Injectable, ServiceUnavailableException } from '@nestjs/common';
import { timingSafeEqual } from 'node:crypto';
import type { Request } from 'express';

@Injectable()
export class TrekEnquiryKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const configuredKey = process.env.CHP_BOOKING_API_KEY;
    if (!configuredKey) throw new ServiceUnavailableException('Trek enquiry submission is not configured');

    const request = context.switchToHttp().getRequest<Request>();
    const supplied = Buffer.from(request.header('x-chp-booking-key') ?? '');
    const expected = Buffer.from(configuredKey);
    if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) {
      throw new ForbiddenException('Trek enquiry request is not authorized');
    }
    return true;
  }
}
