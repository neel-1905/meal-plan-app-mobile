import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { userDislikedFoodsQueryOptions } from "../hooks/user-disliked-foods.query-options";
import {
  ErrorScreen,
  LoadingScreen,
  SelectableChip,
} from "@/shared/components/ui";
import { ScrollView, View } from "react-native";
import { foodsQueryOptions } from "../hooks/foods.query-options";

export const DislikesList = ({
  onSelectionChange,
}: {
  onSelectionChange: (ids: string[]) => void;
}) => {
  const [selectedDislikes, setSelectedDislikes] = useState<string[]>([]);

  const { data, isLoading, error } = useQuery(foodsQueryOptions());

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen error={error.message} />;

  const toggleDislike = (id: string) => {
    setSelectedDislikes((current) => {
      const next = current.includes(id)
        ? current.filter((foodId) => foodId !== id)
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
        {data?.map((item) => (
          <SelectableChip
            key={item.id}
            text={item.name}
            isSelected={selectedDislikes.includes(item.id)}
            onPress={() => toggleDislike(item.id)}
            className="self-start"
          />
        ))}
      </View>
    </ScrollView>
  );
};
