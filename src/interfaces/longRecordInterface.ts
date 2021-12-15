import { Address } from "./address";
import { DocType } from "./docTypeEnam";
import { Person } from "./personClass";

export class LongRecord{
    id?: Number;
    type: DocType;
    blanks_numbers: string;
    notarial_action_id: string;
    sertificated_by: Number;
    sertificating_date: string;
    sertificating_place: Address;
    person: Person;
}