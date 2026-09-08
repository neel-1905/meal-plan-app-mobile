import { useUpdateUserAllergens } from "@/features/allergies/hooks/allergy.mutations";
import { AllergiesList } from "@/features/allergies/ui/allergies-list";
import { UserPreferencesStepCounter } from "@/features/onboarding/ui/user-preferences-step-counter";
import { BackButton, Button } from "@/shared/components/button";
import { Heading } from "@/shared/components/ui";
import { router } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AllergiesScreen = () => {
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);

  const { mutateAsync, isPending } = useUpdateUserAllergens();

  const saveAllergens = async () => {
    await mutateAsync({
      allergenIds: selectedAllergens,
    });
    router.navigate("/dislikes");
  };

  return (
    <View className="bg-background flex-1">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 p-safe-offset-4">
          <View className="gap-4 mb-6">
            <BackButton />
            <UserPreferencesStepCounter numOfSteps={5} currentStep={2} />
          </View>

          <Heading text="Any allergies?" className="mb-8" />

          <AllergiesList onSelectionChange={setSelectedAllergens} />

          <Button
            className="mt-auto"
            loading={isPending}
            onPress={saveAllergens}
          >
            Continue
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AllergiesScreen;
