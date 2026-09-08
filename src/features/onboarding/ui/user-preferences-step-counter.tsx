import { cn } from "@/shared/utils";
import { View } from "react-native";

export const UserPreferencesStepCounter = ({
  numOfSteps,
  currentStep,
}: {
  numOfSteps: number;
  currentStep: number;
}) => {
  return (
    <View className="flex-row justify-evenly gap-1.5">
      {Array.from({ length: numOfSteps }).map((_, index) => {
        return (
          <View
            key={`user-preference-${index}`}
            className={cn(
              "h-3 flex-1 rounded-full transform transition-colors delay-200",
              currentStep >= index + 1 ? "bg-secondary" : "bg-[#E6E6E6]",
            )}
          ></View>
        );
      })}
    </View>
  );
};
