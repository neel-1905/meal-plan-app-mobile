import { ReminderForm } from "@/features/onboarding/ui/reminder-form";
import { UserPreferencesStepCounter } from "@/features/onboarding/ui/user-preferences-step-counter";
import { useUpdateUserPreferences } from "@/features/user-preferences/hooks/user-preferences.mutation";
import { ReminderDay } from "@/features/user-preferences/types/user-preferences.types";
import { BackButton, Button } from "@/shared/components/button";
import { Heading } from "@/shared/components/ui";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ReminderScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const [reminderTime, setReminderTime] = useState<string | null>("09:00");

  const [reminderDay, setReminderDay] = useState<ReminderDay | null>("MONDAY");

  const { mutateAsync, isPending } = useUpdateUserPreferences();

  const handleDone = async () => {
    await mutateAsync({
      reminderEnabled: isEnabled,
      reminderDay: isEnabled ? reminderDay : null,
      reminderTime: isEnabled ? reminderTime : null,
      onboardingCompleted: true,
    });

    router.replace("/meal-plan");
  };

  return (
    <View className="bg-background flex-1">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 p-safe-offset-4">
          <View className="gap-4 mb-6">
            <BackButton />

            <UserPreferencesStepCounter numOfSteps={5} currentStep={5} />
          </View>

          <Heading text="Set a weekly reminder" className="mb-6" />

          <ReminderForm
            isEnabled={isEnabled}
            reminderTime={reminderTime}
            reminderDay={reminderDay}
            onEnabledChange={setIsEnabled}
            onTimeChange={setReminderTime}
            onDayChange={setReminderDay}
          />

          <Button className="mt-auto" onPress={handleDone} disabled={isPending}>
            Done
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ReminderScreen;
