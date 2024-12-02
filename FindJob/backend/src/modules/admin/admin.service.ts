import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async createAdmin(username: string, password: string) {
    const newAdmin = this.adminRepository.create({ username, password });
    return this.adminRepository.save(newAdmin);
  }

  async findAllAdmins() {
    return this.adminRepository.find();
  }

  async findByUsername(username: string) {
    return this.adminRepository.findOne({ where: { username } });
  }
}
