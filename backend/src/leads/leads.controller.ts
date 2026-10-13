import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { CreateLeadDto } from './dto/create-lead.dto';
import { LeadSubmissionKeyGuard } from './lead-submission-key.guard';
import { LeadsService } from './leads.service';

@ApiExcludeController()
@UseGuards(LeadSubmissionKeyGuard)
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  create(@Body() dto: CreateLeadDto) {
    return this.leadsService.create(dto);
  }
}
