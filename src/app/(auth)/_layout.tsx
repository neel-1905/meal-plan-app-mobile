import { useAuthSession } from "@/features/auth/hooks/use-auth-session.hook";
import { LoadingScreen } from "@/shared/components/ui";
import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {
  const { data, isPending } = useAuthSession();

  if (isPending) return <LoadingScreen />;

  if (!isPending && data?.session) return <Redirect href={`/(onboarding)`} />;

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;
