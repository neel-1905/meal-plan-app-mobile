export type ServingSize = "2" | "4" | "6" | "8";

export type ReminderDay =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export interface UserPreferences {
  defaultServings: ServingSize;
  reminderEnabled: boolean;
  reminderDay: ReminderDay | null;
  reminderTime: string | null;
}
