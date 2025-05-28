import { ColumnType } from "./enums";

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  status: ColumnType;
  color: string;
}
