import { Address } from 'src/interfaces/address';
import { HistoryRec } from 'src/interfaces/historyInterface';
import { LongAdmin } from 'src/interfaces/longAdminInterface';
import { LongRegistrator } from 'src/interfaces/longRegistratorInterface';
import { Person } from 'src/interfaces/personClass';
import { User } from 'src/interfaces/userInterface';
import { Client } from 'ts-postgres';
import { LongRecord } from '../interfaces/longRecordInterface';

class Database {
  constructor(private readonly client: Client) {}
  
  async getAddressById(id: number): Promise<Address> {
    return this.client.query('SELECT * FROM "addresses" WHERE id=$1', [id])[0];
  }
  async getPersonalById(id: number): Promise<Person> {
        return this.client.query('SELECT * FROM "personal_data" WHERE id=$1', [id])[0];
  }
  async getPassportById(id: number): Promise<Address> {
        return this.client.query('SELECT * FROM "passport_data" WHERE id=$1', [id])[0];
  }
  async getUser(email: string, pass: string): Promise<User> {
    return this.client.query('SELECT id, role FROM "users" WHERE email=$1 AND password=$2',
    [email, pass])[0];
  }
  async getRegistry(
    page: number,
    per_page: number,
    user_id?: number,
  ): Promise<LongRecord[]> {
    /*
        SELECT doc.*, pers.id FROM 
        "document" doc LEFT JOIN "document_persona_data" dpd ON doc.id=dpd.document_id
        LEFT JOIN "personal_data" pers ON dpd.personal_id=pers.id
        [WHERE doc.sertificated_by_id=%user_id]
        OFFSET %per_page*%page LIMIT %per_page        
        */
    const a = new LongRecord();
    const b = new LongRecord();
    return [a, b];
  }
  async getRecordById(id: number): Promise<LongRecord> {
    /*
        SELECT doc.*, pers.id FROM 
        "document" doc LEFT JOIN "document_persona_data" dpd ON doc.id=dpd.document_id
        LEFT JOIN "personal_data" pers ON dpd.personal_id=pers.id
        WHERE doc.id=%id
        */
    const a = new LongRecord();
    const b = new LongRecord();
    return a;
  }
  async getHistoryForPostById(
    id: number,
    page: number,
    per_page: number,
    userId?: number,
  ): Promise<HistoryRec[]> {
    /*
            SELECT * FROM "change_log" 
            WHERE document_id=%id
            [AND user_id=%user_Id]
            ORDER BY action_time
            DESC
            OFFSET %page*%per_page
            LIMIT %per_page
            */
    const a = new HistoryRec();
    return [a];
  }
  async getHistoryForPostForDate(id: number, date: string): Promise<HistoryRec[]> {
    /*
             SELECT * FROM "change_log" 
            WHERE document_id=%id
            [AND user_id=%user_Id]
            ORDER BY action_time
            DESC
            OFFSET %page*%per_page
            LIMIT %per_page
            */
    const a = new HistoryRec();
    return [a];
  }
  async postRecord(rec: LongRecord): Promise<number> {
    return 5;
  }
  async updateRecord(rec: LongRecord): Promise<number> {
    return 5;
  }
  async getRegistrator(page: number, per_page: number): Promise<LongRegistrator[]> {
    /*
        SELECT us.id, us.fullname, us.email, us.date_of_birth, us.passport_data_id,
        us.taxpayer_code, org.name, pos.name FROM
        "user" us LEFT JOIN "organization" org ON us.organization_id=org.id
        LEFT JOIN "position" pos ON pos.id=us.position_id
        WHERE us.role="registrator"
        OFFSET %page*%per_page LIMIT %per_page
        */
    const a = new LongRegistrator();
    const b = new LongRegistrator();
    return [a, b];
  }
  async getRegistratorById(id: number): Promise<LongRegistrator> {
    const a = new LongRegistrator();
    const b = new LongRegistrator();
    return b;
    /*
        SELECT us.id, us.fullname, us.email, us.date_of_birth, us.passport_data_id,
        us.taxpayer_code, org.name, pos.name FROM
        "user" us LEFT JOIN "organization" org ON us.organization_id=org.id
        LEFT JOIN "position" pos ON pos.id=us.position_id
        WHERE us.role="registrator" AND us.id=%id
        */
  }
  async postRegistrator(rec: LongRegistrator): Promise<number> {
    return 10;
  }
  async updateRegistrator(rec: LongRecord): Promise<number> {
    return 12;
  }

  async getAdmins(page: number, per_page: number): Promise<LongAdmin[]> {
    /*
        SELECT us.id, us.fullname, us.email, us.date_of_birth, us.passport_data_id,
        us.taxpayer_code, org.name, pos.name FROM
        "user" us LEFT JOIN "organization" org ON us.organization_id=org.id
        LEFT JOIN "position" pos ON pos.id=us.position_id
        WHERE us.role="admin"
        OFFSET %page*%per_page LIMIT %per_page
        */
    const a = new LongAdmin();
    const b = new LongAdmin();
    return [a, b];
  }
  async getAdminById(id: number): Promise<LongAdmin> {
    /*
        SELECT us.id, us.fullname, us.email, us.date_of_birth, us.passport_data_id,
        us.taxpayer_code, org.name, pos.name FROM
        "user" us LEFT JOIN "organization" org ON us.organization_id=org.id
        LEFT JOIN "position" pos ON pos.id=us.position_id
        WHERE us.role="admin" AND us.id=%id
        */
    const b = new LongAdmin();
    return b;
  }
  async getRegistratorsById(
    adm_id: number,
    page: number,
    per_page: number,
  ): Promise<LongRegistrator[]> {
    /*
        SELECT us.id, us.fullname, us.email, us.date_of_birth, us.passport_data_id,
        us.taxpayer_code, org.name, pos.name FROM
        "user" us LEFT JOIN "organization" org ON us.organization_id=org.id
        LEFT JOIN "position" pos ON pos.id=us.position_id
        WHERE us.role="registrator"
        OFFSET %page*%per_page LIMIT %per_page
        */
    /*
       SELECT document_id FROM "change_log" WHERE action_type='create' */
    const a = new LongRegistrator();
    const b = new LongRegistrator();
    return [a, b];
  }
  async postAdmin(adm: LongAdmin): Promise<number> {
    return 100;
  }
  async updateAdmin(adm: LongAdmin): Promise<number> {
    return 103;
  }
}

const database = new Database(
  new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres'
  }),
);

export { database };
