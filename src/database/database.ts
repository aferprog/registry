import { HistoryRec } from "src/interfaces/historyInterface";
import { LongAdmin } from "src/interfaces/longAdminInterface";
import { LongRegistrator } from "src/interfaces/longRegistratorInterface";
import { User } from "src/interfaces/userInterface";
import { LongRecord } from "../interfaces/longRecordInterface";

class Database{
    getUser(email: String, pass: String): User {
        return {id: 1, role:"admin"};
    }
    getRegistry(page: Number, per_page: Number, user_id?: Number): Array<LongRecord>{
        const a = new LongRecord();
        const b = new LongRecord();
        return [a,b];
    }
    getRecordById(id:Number): LongRecord{
        const a = new LongRecord();
        const b = new LongRecord();
        return a;
    }
    getHistoryForPostById(id: Number, page: Number, per_page: Number, userId?: Number)
        :Array<HistoryRec>{
            const a = new HistoryRec();
            return [a];
    }
    getHistoryForPostForDate(id: Number, date: String)
        :Array<HistoryRec>{
            const a = new HistoryRec();
            return [a];
    }
    postRecord(rec: LongRecord): Number{
        return 5;
    }
    updateRecord(rec: LongRecord): Number{
        return 5;
    }
    getRegistrator(page: Number, per_page: Number): Array<LongRegistrator>{
        const a = new LongRegistrator();
        const b = new LongRegistrator();
        return [a,b];
    }
    getRegistratorById(id:Number): LongRegistrator{
        const a = new LongRegistrator();
        const b = new LongRegistrator();
        return b;
    }
    postRegistrator(rec: LongRegistrator): Number{
        return 10;
    }
    updateRegistrator(rec: LongRecord): Number{
        return 12;
    }

    getAdmins(page: Number, per_page: Number): Array<LongAdmin>{
        const a = new LongAdmin();
        const b = new LongAdmin();
        return [a,b];
    }
    getAdminById(id: Number): LongAdmin{
        
        const b = new LongAdmin();
        return b;
    }
    getRegistratorsById(adm_id: Number,page: Number, per_page: Number): Array<LongRegistrator>{
        const a = new LongRegistrator();
        const b = new LongRegistrator();
        return [a,b];
    }
    postAdmin(adm: LongAdmin): Number{
        return 100;
    }
    updateAdmin(adm: LongAdmin): Number{
        return 103;
    }
}

const database = new Database();

export {database};

