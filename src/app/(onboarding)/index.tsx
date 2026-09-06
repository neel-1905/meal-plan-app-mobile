import { Step1 } from "@/features/onboarding/ui/step-1";
import { Step2 } from "@/features/onboarding/ui/step-2";
import { Step3 } from "@/features/onboarding/ui/step-3";
import { Button } from "@/shared/components/button";
import { router } from "expo-router";
import { useState } from "react";

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [Step1, Step2, Step3];

  const CurrentStep = steps[currentStep - 1];

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((step) => step + 1);
      return;
    }

    if (currentStep === 3) router.navigate("/diet");
  };

  return (
    <View className="bg-background flex-1 p-safe-offset-4">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1">
          <CurrentStep />
        </View>

        <Button onPress={handleNextStep}>Continue</Button>
        <Button variant={`ghost`} onPress={() => router.navigate("/diet")}>
          Skip
        </Button>
      </SafeAreaView>
    </View>
  );
};

export default OnboardingScreen;
