import { useUpdateUserDislikedFoods } from "@/features/food/hooks/user-disliked-foods.mutations";
import { DislikesList } from "@/features/food/ui/dislikes-list";
import { UserPreferencesStepCounter } from "@/features/onboarding/ui/user-preferences-step-counter";
import { BackButton, Button } from "@/shared/components/button";
import { Heading } from "@/shared/components/ui";
import { router } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dislikes = () => {
  const [selectedDislikeIds, setSelectedDislikeIds] = useState<string[]>([]);

  const { mutateAsync, isPending } = useUpdateUserDislikedFoods();

  const saveDislikes = async () => {
    await mutateAsync({
      foodIds: selectedDislikeIds,
    });
    router.navigate("/servings");
  };

  return (
    <View className="bg-background flex-1">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 p-safe-offset-4">
          <View className="gap-4 mb-6">
            <BackButton />
            <UserPreferencesStepCounter numOfSteps={5} currentStep={3} />
          </View>

          <Heading text="How about dislikes?" className="mb-8" />

          <DislikesList onSelectionChange={setSelectedDislikeIds} />

          <Button onPress={saveDislikes} loading={isPending}>
            Continue
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Dislikes;
