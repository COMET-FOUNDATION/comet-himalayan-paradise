import { Module } from '@nestjs/common';
import { CampBookingKeyGuard } from './camp-booking-key.guard';
import { CampBookingsController } from './camp-bookings.controller';
import { CampBookingsService } from './camp-bookings.service';

@Module({
  controllers: [CampBookingsController],
  providers: [CampBookingKeyGuard, CampBookingsService],
})
export class CampBookingsModule {}
