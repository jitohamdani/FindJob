import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobSeeker } from './job-seeker.entity';
import { JobSeekerService } from './job-seeker.service';
import { JobSeekerController } from './job-seeker.controller';

@Module({
  imports: [TypeOrmModule.forFeature([JobSeeker])],
  controllers: [JobSeekerController],
  providers: [JobSeekerService],
})
export class JobSeekerModule {}

