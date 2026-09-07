import { useQuery } from "@tanstack/react-query";
import { View, Text, ScrollView } from "react-native";
import { dietTypesQueryOptions } from "../hooks/diet-type.query-options";
import {
  AppText,
  ErrorScreen,
  LoadingScreen,
  SelectableChip,
} from "@/shared/components/ui";
import { useState } from "react";

type DietTypesListProps = {
  onSelectionChange: (ids: string[]) => void;
};

export const DietTypesList = (props: DietTypesListProps) => {
  const { onSelectionChange } = props;

  const [selectedDietTypeIds, setSelectedDietTypeIds] = useState<string[]>([]);

  const { data, isLoading, error } = useQuery(dietTypesQueryOptions());

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen error={error.message} />;

  const toggleDietType = (id: string) => {
    setSelectedDietTypeIds((current) => {
      const next = current.includes(id)
        ? current.filter((dietTypeId) => dietTypeId !== id)
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
      <View className="gap-3.5">
        {data?.map((item) => {
          return (
            <SelectableChip
              key={item.id}
              text={item.name}
              isSelected={selectedDietTypeIds.includes(item.id)}
              onPress={() => toggleDietType(item.id)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
