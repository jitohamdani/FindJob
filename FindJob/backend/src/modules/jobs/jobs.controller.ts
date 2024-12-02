import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Post()
  create(@Body() job: any) {
    return this.jobsService.create(job);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() job: any) {
    return this.jobsService.update(+id, job);
  }
}
