import { IMAGES } from "@/shared/constants/images";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { OnboardingSteps } from "./onboarding-steps";
import { Heading } from "@/shared/components/ui";

export const Step3 = () => {
  return (
    <View className="flex gap-12.5 items-center">
      <Image source={IMAGES.onboarding3} style={{ width: 366, height: 366 }} />

      <OnboardingSteps current={3} />

      <View className="gap-3">
        <Heading
          text="Delicious, healthy meals made easy"
          className="text-center"
        />

        <Text className="font-sans text-foreground-muted text-center">
          Easily cook healthy, delicious meals in about 30 minutes, from start
          to finish.
        </Text>
      </View>
    </View>
  );
};
