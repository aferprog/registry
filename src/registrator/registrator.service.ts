import { Injectable } from '@nestjs/common';
import { database } from 'src/database/database';
import { LongRecord } from 'src/interfaces/longRecordInterface';
import { LongRegistrator } from 'src/interfaces/longRegistratorInterface';

@Injectable()
export class RegistratorService {
    getRegistrators(page?: Number, per_page?: Number): Array<LongRegistrator>{
        if(!page) page=1;
        if(!per_page) per_page=5;
        return database.getRegistrator(page, per_page);
    }
    getRegistratorById(id:Number): LongRegistrator{
        return database.getRegistratorById(id);
    }
    getPostsById(id:Number, page: Number, per_page: Number): Array<LongRecord>{
        return database.getRegistry(page,per_page,id);
    }
    getHistoryForRecord(regId:Number, postId:Number):string{
        return ""+regId+" do "+ postId;
    }
    updateRegistrator(reg: LongRegistrator): Number{
        return database.postRegistrator(reg);
    }
    createRegistrator(reg: LongRegistrator): Number{
        return database.postRegistrator(reg);
    }
}
