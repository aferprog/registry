import { ActionType } from "./actionTypeEnam";

export class HistoryRec{
    id?: Number;
    user_id: Number;
    document_id: Number;
    action_type: ActionType;
    action_time: String;
    changed_field: String;
    old_value: any;
}