import { IMAGES } from "@/shared/constants/images";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { OnboardingSteps } from "./onboarding-steps";
import { Heading } from "@/shared/components/ui";

export const Step2 = () => {
  return (
    <View className="flex gap-12.5 items-center">
      <Image source={IMAGES.onboarding2} style={{ width: 366, height: 366 }} />

      <OnboardingSteps current={2} />

      <View className="gap-3">
        <Heading
          text="Simple, stress-free grocery shopping"
          className="text-center"
        />

        <Text className="font-sans text-foreground-muted text-center">
          Grocery shop once per week with an organized "done for you" shopping
          list.
        </Text>
      </View>
    </View>
  );
};
