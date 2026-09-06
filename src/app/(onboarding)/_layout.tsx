import { userPreferencesQueryOptions } from "@/features/onboarding/hooks/onboarding.query-options";
import { LoadingScreen } from "@/shared/components/ui";
import { useQuery } from "@tanstack/react-query";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

const OnboardingLayout = () => {
  console.log("onboarding");
  const { data, isLoading, error } = useQuery(userPreferencesQueryOptions());

  if (isLoading) return <LoadingScreen />;

  if (error) return <Text>{error.message}</Text>;

  if (data && data.onboardingCompleted) return <Redirect href={`/meal-plan`} />;

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default OnboardingLayout;
