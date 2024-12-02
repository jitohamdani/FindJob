import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './jobs.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  findAll() {
    return this.jobsRepository.find();
  }

  create(job: Partial<Job>) {
    const newJob = this.jobsRepository.create(job);
    return this.jobsRepository.save(newJob);
  }

  update(id: number, job: Partial<Job>) {
    return this.jobsRepository.update(id, job);
  }
}
