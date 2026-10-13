import { Module } from '@nestjs/common';
import { LeadSubmissionKeyGuard } from './lead-submission-key.guard';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';

@Module({
  controllers: [LeadsController],
  providers: [LeadSubmissionKeyGuard, LeadsService],
})
export class LeadsModule {}
