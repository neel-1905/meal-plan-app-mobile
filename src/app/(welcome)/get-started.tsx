import { Button } from "@/shared/components/button";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { IMAGES } from "@/shared/constants/images";
import { Link, Redirect, router } from "expo-router";
import { useAuthSession } from "@/features/auth/hooks/use-auth-session.hook";
import { LoadingScreen } from "@/shared/components/ui";
import { authClient } from "@/features/auth/lib/auth-client";

const GetStartedSceen = () => {
  const { data, isPending, error } = authClient.useSession();

  if (isPending) return <LoadingScreen />;

  if (error)
    return (
      <View className="flex-1 bg-background flex-center">
        <Text>{error.message}</Text>
      </View>
    );

  if (!isPending && data?.session) return <Redirect href={`/(onboarding)`} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="p-safe-offset-4 flex-1 flex flex-col justify-center">
        <View className="flex-1 flex justify-center items-center gap-4">
          <View className="rounded-4xl bg-[#1a4d2e] h-24 w-24 flex-center">
            <Image source={IMAGES.carrot} style={{ width: 54, height: 54 }} />
          </View>
          <Text className="text-5xl font-bold">Mealtime</Text>
        </View>

        <View className="flex flex-col gap-3 ">
          <Button
            onPress={() => router.navigate("/sign-up")}
            className="mt-auto"
          >
            Get Started
          </Button>

          <Text className="text-foreground-muted mx-auto">
            Already a member?{" "}
            <Link href={`/sign-in`} className="underline text-foreground">
              Sign In
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStartedSceen;
