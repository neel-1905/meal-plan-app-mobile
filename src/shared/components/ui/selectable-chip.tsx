import { View, Text } from "react-native";
import { SelectableOption } from "./selectable-option";
import { AppText } from "./app-text";

export const SelectableChip = ({
  text,
  isSelected,
  onPress,
}: {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}) => {
  return (
    <SelectableOption
      className="justify-center w-full"
      isSelected={isSelected}
      onPress={onPress}
    >
      <AppText variant="semibold">{text}</AppText>
    </SelectableOption>
  );
};
