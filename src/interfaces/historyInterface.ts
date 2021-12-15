import { ActionType } from "./actionTypeEnam";
import { Fields } from "./fieldEnam";

export class HistoryRec{
    id?: Number;
    user_id: Number;
    document_id: Number;
    action_time: string;
    action_type: ActionType;
    changed_field: Fields;
    old_value: any;
}