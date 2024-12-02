import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobSeeker } from './job-seeker.entity';

@Injectable()
export class JobSeekerService {
  constructor(
    @InjectRepository(JobSeeker)
    private jobSeekerRepository: Repository<JobSeeker>,
  ) {}

  async registerJobSeeker(data: Partial<JobSeeker>) {
    const newJobSeeker = this.jobSeekerRepository.create(data);
    return this.jobSeekerRepository.save(newJobSeeker);
  }

  async findAllJobSeekers() {
    return this.jobSeekerRepository.find();
  }

  async findJobSeekerByEmail(email: string) {
    return this.jobSeekerRepository.findOne({ where: { email } });
  }

  async updateJobSeekerProfile(id: number, data: Partial<JobSeeker>) {
    await this.jobSeekerRepository.update(id, data);
    return this.jobSeekerRepository.findOne({ where: { id } });
  }
}
