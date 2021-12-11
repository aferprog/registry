import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { HistoryRec } from 'src/interfaces/historyInterface';
import { LongRecord } from 'src/interfaces/longRecordInterface';
import { RegistryService } from './registry.service';

@Controller('registry')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  // @Roles()
  @Get('/')
  async getRecord(
    @Query('page') page?: Number,
    @Query('per_page') per_page?: Number,
    ): Promise<Array<LongRecord>> 
  {
    return this.registryService.getRegistry(page, per_page);
  }

  @Get(':id')
  async getRecordById(
    @Param('id') id: Number,
    @Query('date') date?: String
    ): Promise<LongRecord> 
  {
    return this.registryService.getRegistryById(id, date);
  }

  @Get(':id/history')
  async getHistoryById(
    @Param('id') id: Number,
    @Query('page') page?: Number,
    @Query('per_page') per_page?: Number,
    ): Promise<Array<HistoryRec>> 
  {
    return this.registryService.getHistory(id, page, per_page);
  }

  @Get(':docId/history/:regId')
  async getHistoryByIdByUser(
    @Param('docId') docId: Number,
    @Param('regId') regId: Number,
    @Query('page') page?: Number,
    @Query('per_page') per_page?: Number,
    ): Promise<Array<HistoryRec>> 
  {
    return this.registryService.getHistory(docId,page, per_page, regId);
  }

  @Put('/')
  async updateRecordById(
    @Body('record') rec: LongRecord
    ): Promise<Number> 
  {
    return this.registryService.updateRecord(rec);
  }
  @Post('/')
  async createRecord(
    @Body('record') rec: LongRecord
    ): Promise<Number> 
  {
    return this.registryService.postRecord(rec);
  }
}
