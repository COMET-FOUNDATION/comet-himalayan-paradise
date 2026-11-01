import { Module } from '@nestjs/common';
import { TrekEnquiriesController } from './trek-enquiries.controller';
import { TrekEnquiryKeyGuard } from './trek-enquiry-key.guard';
import { TrekEnquiriesService } from './trek-enquiries.service';

@Module({
  controllers: [TrekEnquiriesController],
  providers: [TrekEnquiryKeyGuard, TrekEnquiriesService],
})
export class TrekEnquiriesModule {}
