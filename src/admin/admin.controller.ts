import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LongAdmin } from 'src/interfaces/longAdminInterface';
import { LongRegistrator } from 'src/interfaces/longRegistratorInterface';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService){}

    @Get('/')
    async getAdmins(
        @Query('page') page: Number,
        @Query('per_page') per_page: Number
    ): Promise<Array<LongAdmin>>
    {
        return this.adminService.getAdmins(page, per_page);
    }

    @Get(':id')
    async getAdminById(
        @Param('id') id: Number
    ): Promise<LongAdmin>
    {
        return this.adminService.getAdminById(id);
    }
    
    @Get(':id/registrators')
    async getRegistratorsByAdmin(
        @Param('id') id: Number,
        @Query('page') page: Number,
        @Query('per_page') per_page: Number
    ): Promise<Array<LongRegistrator>>
    {
        return this.adminService.getRegistratorsById(id, page, per_page);
    }

    @Post('/')
    async createAdmin(
        @Body('admin') admin: LongAdmin
    ): Promise<Number>
    {
        return this.adminService.createAdmin(admin);
    }

    @Put('/')
    async updateAdmin(
        @Body('admin') admin: LongAdmin
    ): Promise<Number>
    {
        return this.adminService.updateAdmin(admin);
    }
}
