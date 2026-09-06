import { useAuthSession } from "@/features/auth/hooks/use-auth-session.hook";
import { LoadingScreen } from "@/shared/components/ui";
import { Redirect, Slot, Stack } from "expo-router";

const AppLayout = () => {
  const { data, isPending } = useAuthSession();

  if (isPending) return <LoadingScreen />;

  if (!isPending && !data?.session) return <Redirect href={`/get-started`} />;

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AppLayout;
