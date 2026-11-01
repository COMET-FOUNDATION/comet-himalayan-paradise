import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { CreateTrekEnquiryDto } from './dto/create-trek-enquiry.dto';
import { TrekEnquiryKeyGuard } from './trek-enquiry-key.guard';
import { TrekEnquiriesService } from './trek-enquiries.service';

@ApiExcludeController()
@UseGuards(TrekEnquiryKeyGuard)
@Controller('trek-enquiries')
export class TrekEnquiriesController {
  constructor(private readonly trekEnquiriesService: TrekEnquiriesService) {}

  @Post()
  create(@Body() dto: CreateTrekEnquiryDto) {
    return this.trekEnquiriesService.create(dto);
  }
}
