import { useAuthSession } from "@/features/auth/hooks/use-auth-session.hook";
import { userPreferencesQueryOptions } from "@/features/onboarding/hooks/onboarding.query-options";
import { LoadingScreen } from "@/shared/components/ui";
import { useQuery } from "@tanstack/react-query";
import { Redirect, Stack } from "expo-router";

const AppLayout = () => {
  const { data, isPending } = useAuthSession();

  const { data: preferences, isLoading } = useQuery({
    ...userPreferencesQueryOptions(),
    enabled: !isPending,
  });

  if (isPending || isLoading) return <LoadingScreen />;

  if ((!isPending && !data?.session) || !preferences?.onboardingCompleted)
    return <Redirect href={`/get-started`} />;

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AppLayout;
