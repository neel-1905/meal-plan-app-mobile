import { Redirect, Stack, useSegments } from "expo-router";
import "../global.css";
import { QueryProvider } from "@/shared/providers/query-provider";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { StatusBar } from "react-native";
import { NavigationBar } from "expo-navigation-bar";
import Toast from "react-native-toast-message";
import {
  ErrorToast,
  LoadingScreen,
  SuccessToast,
} from "@/shared/components/ui";
import { authClient } from "@/features/auth/lib/auth-client";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });

  const segments = useSegments();

  const { data: session, isPending: sessionLoading } = authClient.useSession();

  useEffect(() => {
    if (fontsLoaded && !sessionLoading) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || sessionLoading) {
    return <LoadingScreen />;
  }

  const firstSegment = segments[0];

  const isAuthRoute = firstSegment === "(auth)";
  const isAppRoute = firstSegment === "(app)";

  /*
   * Not authenticated
   */
  if (!session && !isAuthRoute) {
    return <Redirect href="/get-started" />;
  }

  /*
   * Authenticated
   */
  if (session && !isAppRoute) {
    return <Redirect href="/meal-plan" />;
  }

  return (
    <QueryProvider>
      <KeyboardProvider navigationBarTranslucent statusBarTranslucent>
        <StatusBar
          translucent={true}
          barStyle={`dark-content`}
          backgroundColor={`transparent`}
        />
        <Stack screenOptions={{ headerShown: false }} />
        <Toast
          config={{
            success: (props) => <SuccessToast {...props} />,
            error: (props) => <ErrorToast {...props} />,
          }}
        />
        <NavigationBar style="auto" />
      </KeyboardProvider>
      {/*<Redirect href={`/get-started`} />*/}
    </QueryProvider>
  );
}
