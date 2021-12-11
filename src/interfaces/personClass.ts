import { Address } from "./address";

export class Person{
    id?: Number;
    taxpayer_code: String;
    place_of_living: Address;
    place_of_birth: Address;
    date_of_birth: String;
}