import { Injectable } from '@nestjs/common';
import { database } from 'src/database/database';
import { ActionType } from 'src/interfaces/actionTypeEnam';
import { Fields } from 'src/interfaces/fieldEnam';
import { HistoryRec } from 'src/interfaces/historyInterface';
import { LongRecord } from 'src/interfaces/longRecordInterface';

const personFields = [Fields.per_date_of_birth, Fields.per_place_of_birth, Fields.per_place_of_living, Fields.per_tax];

@Injectable()
export class RegistryService {
  getRegistry(page?: Number, per_page?: Number): Array<LongRecord> {
    if (!page) page=1;
    if (!per_page) per_page=5;
    return database.getRegistry(page,per_page);
  }
  getRegistryById(id: Number, date?: string): LongRecord {
    const history = database.getHistoryForPostForDate(id, date);
    let rec = database.getRecordById(id);

    history.forEach(hist => {
      if (hist.action_type===ActionType.CHANGE){
        if (hist.changed_field in personFields){
          rec.person[hist.changed_field]=hist.old_value;
        }
        else{
          rec[hist.changed_field]=hist.old_value;
        }
      }
    });

    return rec;
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
