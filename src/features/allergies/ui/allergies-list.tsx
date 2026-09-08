import { useQuery } from "@tanstack/react-query";
import { View, Text, ScrollView } from "react-native";
import { allergensQueryOptions } from "../hooks/allergies.query-options";
import {
  ErrorScreen,
  LoadingScreen,
  SelectableChip,
} from "@/shared/components/ui";
import { useState } from "react";

export const AllergiesList = ({
  onSelectionChange,
}: {
  onSelectionChange: (ids: string[]) => void;
}) => {
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);

  const { data, isLoading, error } = useQuery(allergensQueryOptions());

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen error={error.message} />;

  const toggleAllergens = (id: string) => {
    setSelectedAllergens((current) => {
      const next = current.includes(id)
        ? current.filter((allergenId) => allergenId !== id)
        : [...current, id];

      onSelectionChange(next);

      return next;
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 12 }}
      className="mb-10"
    >
      <View className="gap-3.5 flex-row flex-wrap">
        {data?.map((item) => {
          return (
            <SelectableChip
              key={item.id}
              text={item.name}
              isSelected={selectedAllergens.includes(item.id)}
              onPress={() => toggleAllergens(item.id)}
              className="self-start"
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
