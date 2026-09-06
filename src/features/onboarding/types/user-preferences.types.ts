export interface UserPreferences {
  defaultServings: 2 | 4 | 6 | 8;
  reminderDay: number | null;
  reminderTime: string | null;
  onboardingCompleted: boolean;
}
