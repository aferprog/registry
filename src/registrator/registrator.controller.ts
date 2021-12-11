import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LongRecord } from 'src/interfaces/longRecordInterface';
import { LongRegistrator } from 'src/interfaces/longRegistratorInterface';
import { RegistratorService } from './registrator.service';

@Controller('registrator')
export class RegistratorController {
    constructor(private readonly registratorService: RegistratorService){}

    @Get('/')
    async getRegistrators(
        @Query('page') page?: Number,
        @Query('per_page') per_page?: Number,
    ): Promise<Array<LongRegistrator>> 
    {
        return this.registratorService.getRegistrators(page, per_page);
    }

    @Get(':id')
    async getRegistratorById(
        @Param('id') id: Number
        ): Promise<LongRegistrator> 
    {
        return this.registratorService.getRegistratorById(id);
    }
    
    @Get(':id/created')
    async getRecordCreatedById(
        @Param('id') id: Number,
        @Query('page') page?: Number,
        @Query('per_page') per_page?: Number
        ): Promise<Array<LongRecord>> 
    {
        return this.registratorService.getPostsById(id, page, per_page);
    
    }

    @Put('')
    async updateRegistrator(
        @Body('registrator') reg: LongRegistrator
    ): Promise<Number>{
        return this.registratorService.updateRegistrator(reg);
    }

    @Post('/')
    async createRegistrator(
        @Body('registrator') reg: LongRegistrator
    ): Promise<Number>{
        return this.registratorService.createRegistrator(reg);
    }
}
