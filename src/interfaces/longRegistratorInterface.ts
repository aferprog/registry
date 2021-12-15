import { Passport } from "./passport_data";

export class LongRegistrator{
    id?: Number;
    fullname: string;
    email: string;
    date_of_birth: string;
    passport: Passport | Number;
    taxpayer_code: string;
    organization: string;
    position: string;
}

