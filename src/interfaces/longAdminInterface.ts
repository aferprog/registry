import { Passport } from "./passport_data";

export class LongAdmin{
    id?: Number;
    fullname: string;
    email: string;
    date_of_birth: string;
    passport: Passport;
    organization: string;
    position: string;
    taxpayer_code: string;
}