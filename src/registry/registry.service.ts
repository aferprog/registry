import { Injectable } from '@nestjs/common';
import { database } from 'src/database/database';
import { HistoryRec } from 'src/interfaces/historyInterface';
import { LongRecord } from 'src/interfaces/longRecordInterface';


@Injectable()
export class RegistryService {
  getRegistry(page?: Number, per_page?: Number): Array<LongRecord> {
    if (!page) page=1;
    if (!per_page) per_page=5;
    return database.getRegistry(page,per_page);
  }
  getRegistryById(id: Number, date?: String): LongRecord {
    const history = database.getHistoryForPostForDate(id, date);
    return database.getRecordById(id);
  }
  postRecord(rec: LongRecord): Number {
    return database.postRecord(rec);
  }
  updateRecord(rec: LongRecord): Number { 
    return database.updateRecord(rec);
  }
  getHistory(id: Number, page?: Number, per_page?: Number, userId?: Number): Array<HistoryRec> {
    if (!page) page=1;
    if (!per_page) per_page=5;
    
    return database.getHistoryForPostById(id,page,per_page, userId);
  }
}
