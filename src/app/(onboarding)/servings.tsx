import { DislikesList } from "@/features/food/ui/dislikes-list";
import { UserPreferencesStepCounter } from "@/features/onboarding/ui/user-preferences-step-counter";
import { useUpdateUserPreferences } from "@/features/user-preferences/hooks/user-preferences.mutation";
import {
  ServingSize,
  UserPreferences,
} from "@/features/user-preferences/types/user-preferences.types";
import { ServingsList } from "@/features/user-preferences/ui/servings-list";
import { BackButton, Button } from "@/shared/components/button";
import { Heading } from "@/shared/components/ui";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Servings = () => {
  const [serving, setServing] = useState<ServingSize>("2");

  const { mutateAsync, isPending } = useUpdateUserPreferences();

  const updatePreference = async () => {
    await mutateAsync({
      defaultServings: serving as ServingSize,
    });
    router.navigate("/reminder");
  };

  return (
    <View className="bg-background flex-1">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 p-safe-offset-4">
          <View className="gap-4 mb-6">
            <BackButton />
            <UserPreferencesStepCounter numOfSteps={5} currentStep={4} />
          </View>

          <Heading text="How many servings per meal?" className="mb-8" />

          <ServingsList onSelectionChange={setServing} />

          <Button
            className="mt-auto"
            loading={isPending}
            onPress={updatePreference}
          >
            Continue
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Servings;
