import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('create')
  async createAdmin(@Body() body: { username: string; password: string }) {
    return this.adminService.createAdmin(body.username, body.password);
  }

  @Get('list')
  async getAllAdmins() {
    return this.adminService.findAllAdmins();
  }

  @Get(':username')
  async getAdminByUsername(@Param('username') username: string) {
    return this.adminService.findByUsername(username);
  }
}
