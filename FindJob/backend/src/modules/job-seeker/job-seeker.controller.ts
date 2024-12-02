import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { JobSeekerService } from './job-seeker.service';

@Controller('job-seekers')
export class JobSeekerController {
  constructor(private readonly jobSeekerService: JobSeekerService) {}

  @Post('register')
  async register(@Body() body: { name: string; email: string; password: string }) {
    return this.jobSeekerService.registerJobSeeker(body);
  }

  @Get()
  async getAllJobSeekers() {
    return this.jobSeekerService.findAllJobSeekers();
  }

  @Get(':email')
  async getJobSeekerByEmail(@Param('email') email: string) {
    return this.jobSeekerService.findJobSeekerByEmail(email);
  }

  @Put(':id')
  async updateProfile(@Param('id') id: string, @Body() body: Partial<JobSeeker>) {
    return this.jobSeekerService.updateJobSeekerProfile(+id, body);
  }
}

