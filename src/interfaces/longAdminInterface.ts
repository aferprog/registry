import { Passport } from "./passport_data";

export class LongAdmin{
    id?: Number;
    fullname: String;
    email: String;
    date_of_birth: String;
    passport: Passport;
    organization: String;
    position: String;
    taxpayer_code: String;
}