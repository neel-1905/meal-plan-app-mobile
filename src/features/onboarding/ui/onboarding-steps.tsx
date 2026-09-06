import { cn } from "@/shared/utils";
import { View, Text } from "react-native";

export const OnboardingSteps = ({
  numSteps = 3,
  current,
}: {
  numSteps?: number;
  current: number;
}) => {
  return (
    <View className="mx-auto flex-row gap-3 items-center">
      {Array.from({ length: numSteps }).map((item, index) => {
        return (
          <View
            key={`onboarding-step-${index}`}
            className={cn(
              "h-3.5 w-3.5 rounded-full",
              current === index + 1 ? "bg-primary" : "bg-[#E6E6E6]",
            )}
          ></View>
        );
      })}
    </View>
  );
};
