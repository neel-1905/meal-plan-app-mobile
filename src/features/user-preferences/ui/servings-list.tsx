import { servings } from "@/shared/constants/servings";
import { ScrollView, View } from "react-native";
import { SelectableServing } from "./selectable-serving";
import { useState } from "react";
import { ServingSize } from "../types/user-preferences.types";

export const ServingsList = ({
  onSelectionChange,
}: {
  onSelectionChange: (num: ServingSize) => void;
}) => {
  const [selectedServing, setSelectedServing] = useState<ServingSize>("2");

  const handleSelection = (num: ServingSize) => {
    setSelectedServing(num);
    onSelectionChange(num);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 12 }}
      className="mb-10"
    >
      <View className="gap-3.5">
        {servings.map((serving) => {
          return (
            <SelectableServing
              key={`serving-${serving.num}`}
              heading={`${serving.num} servings`}
              description={serving.description}
              onPress={() => handleSelection(serving.num)}
              isSelected={selectedServing === serving.num}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
