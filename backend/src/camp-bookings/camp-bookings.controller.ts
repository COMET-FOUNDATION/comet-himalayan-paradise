import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { CampBookingKeyGuard } from './camp-booking-key.guard';
import { CampBookingsService } from './camp-bookings.service';
import { CreateCampBookingDto } from './dto/create-camp-booking.dto';

@ApiExcludeController()
@UseGuards(CampBookingKeyGuard)
@Controller('camp-bookings')
export class CampBookingsController {
  constructor(private readonly campBookingsService: CampBookingsService) {}

  @Post()
  create(@Body() dto: CreateCampBookingDto) {
    return this.campBookingsService.create(dto);
  }
}
