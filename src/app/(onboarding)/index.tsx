import { userPreferencesQueryOptions } from "@/features/onboarding/hooks/onboarding.query-options";
import { LoadingScreen } from "@/shared/components/ui";
import { useQuery } from "@tanstack/react-query";
import { View, Text } from "react-native";

const OnboardingScreen = () => {
  const {
    data: preferences,
    isPending,
    error,
  } = useQuery(userPreferencesQueryOptions());

  if (isPending) return <LoadingScreen />;

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Failed to load preferences</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>
        Onboarding completed: {preferences.onboardingCompleted ? "Yes" : "No"}
      </Text>

      <Text>Servings: {preferences.defaultServings}</Text>
    </View>
  );
};

export default OnboardingScreen;
