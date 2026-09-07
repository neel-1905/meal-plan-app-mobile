import { useUpdateUserDietTypes } from "@/features/diet-type/hooks/diet-type.mutations";
import { DietTypesList } from "@/features/diet-type/ui/diet-types-list";
import { UserPreferencesStepCounter } from "@/features/onboarding/ui/user-preferences-step-counter";
import { BackButton, Button } from "@/shared/components/button/";
import { Heading } from "@/shared/components/ui";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DietScreen = () => {
  const [selectedDietTypeIds, setSelectedDietTypeIds] = useState<string[]>([]);

  const { mutateAsync, isPending } = useUpdateUserDietTypes();

  const saveDietTypes = async () => {
    await mutateAsync({
      dietTypeIds: selectedDietTypeIds,
    });
    router.navigate("/allergies");
  };

  return (
    <View className="bg-background flex-1">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 p-safe-offset-4">
          <View className="gap-4 mb-6">
            <BackButton />
            <UserPreferencesStepCounter numOfSteps={5} currentStep={1} />
          </View>

          <Heading text="Pick your diet" className="mb-8" />

          <DietTypesList onSelectionChange={setSelectedDietTypeIds} />

          <Button onPress={saveDietTypes} loading={isPending}>
            Continue
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DietScreen;
