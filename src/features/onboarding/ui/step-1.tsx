import { IMAGES } from "@/shared/constants/images";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { OnboardingSteps } from "./onboarding-steps";
import { Heading } from "@/shared/components/ui";

export const Step1 = () => {
  return (
    <View className="flex gap-12.5 items-center">
      <Image source={IMAGES.onboarding1} style={{ width: 366, height: 366 }} />

      <OnboardingSteps current={1} />

      <View className="gap-3">
        <Heading text="Personalized meal planning" className="text-center" />

        <Text className="font-sans text-foreground-muted text-center">
          Pick your week's meals in minutes. With over 200 personalization
          options, eat exactly how you want to eat.
        </Text>
      </View>
    </View>
  );
};
