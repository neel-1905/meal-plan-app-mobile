import { Redirect, Stack } from "expo-router";
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
import { Platform, StatusBar } from "react-native";
import { NavigationBar } from "expo-navigation-bar";

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

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
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
        <NavigationBar style="light" />
      </KeyboardProvider>
      <Redirect href={`/get-started`} />
    </QueryProvider>
  );
}
