import { Address } from "./address";

export class Person{
    id?: Number;
    taxpayer_code: string;
    place_of_living: Address | Number;
    date_of_birth: string;
    place_of_birth: Address | Number;
}