import { Injectable } from '@nestjs/common';
import { database } from 'src/database/database';
import { LongAdmin } from 'src/interfaces/longAdminInterface';
import { LongRegistrator } from 'src/interfaces/longRegistratorInterface';

@Injectable()
export class AdminService {
    getAdmins(page?: Number, per_page?: Number): Array<LongAdmin>{
        if (!page) page=1;
        if (!per_page) per_page=5;
        return database.getAdmins(page, per_page);
    }
    getAdminById(id: Number): LongAdmin{
        return database.getAdminById(id);
    }
    createAdmin(adm: LongAdmin): Number{
        return database.postAdmin(adm);
    }
    updateAdmin(adm: LongAdmin): Number{
        return database.updateAdmin(adm);
    }
    getRegistratorsById(id: Number, page?: Number, per_page?:Number): Array<LongRegistrator>{
        if (!page) page=1;
        if (!per_page) per_page=5;
        return database.getRegistratorsById(id,page, per_page);
    }
}
