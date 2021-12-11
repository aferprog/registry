import { Address } from "./address";
import { DocType } from "./docTypeEnam";
import { Person } from "./personClass";

export class LongRecord{
    id?: Number;
    type: DocType;
    blanks_numbers: String;
    notarial_action_id: String;
    sertificated_by: Number;
    sertificating_date: String;
    sertificating_place: Address;
    person: Person;
}