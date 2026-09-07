import { TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { cn } from "@/shared/utils";

export const SelectableOption = ({
  isSelected = false,
  children,
  onPress,
  className,
}: {
  isSelected?: boolean;
  onPress?: () => void;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "p-4 rounded-3xl border",
        className,
        isSelected ? "border-primary bg-primary/20" : "border-border",
      )}
    >
      {children}
    </TouchableOpacity>
  );
};
