import { Redirect, Stack } from "expo-router";
import "../global.css";
import { QueryProvider } from "@/shared/providers/query-provider";

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <Redirect href={`/get-started`} />
    </QueryProvider>
  );
}
