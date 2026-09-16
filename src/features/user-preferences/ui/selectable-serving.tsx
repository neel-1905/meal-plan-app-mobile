import { AppText, SelectableOption } from "@/shared/components/ui";

export const SelectableServing = ({
  heading,
  description,
  onPress,
  isSelected,
}: {
  heading: string;
  description: string;
  onPress: () => void;
  isSelected: boolean;
}) => {
  return (
    <SelectableOption onPress={onPress} isSelected={isSelected}>
      <AppText variant="semibold">{heading}</AppText>
      <AppText variant="medium" className="text-foreground-muted text-xs">
        {description}
      </AppText>
    </SelectableOption>
  );
};
