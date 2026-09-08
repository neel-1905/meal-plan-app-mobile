import { SelectableOption } from "./selectable-option";
import { AppText } from "./app-text";
import { cn } from "@/shared/utils";

export const SelectableChip = ({
  text,
  isSelected,
  onPress,
  className,
}: {
  text: string;
  isSelected: boolean;
  onPress: () => void;
  className?: string;
}) => {
  return (
    <SelectableOption
      className={cn("justify-center", className)}
      isSelected={isSelected}
      onPress={onPress}
    >
      <AppText variant="semibold">{text}</AppText>
    </SelectableOption>
  );
};
