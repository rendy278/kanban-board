export const ColumnType = {
  TO_DO: "Todo",
  IN_PROGRESS: "In Progress",
  BLOCKED: "Blocked",
  COMPLETED: "Completed",
} as const;

export type ColumnType = (typeof ColumnType)[keyof typeof ColumnType];

export const ItemType = {
  TASK: "Task",
} as const;

export type ItemType = (typeof ItemType)[keyof typeof ItemType];
