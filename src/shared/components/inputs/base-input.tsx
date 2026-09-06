import { cn } from "@/shared/utils";
import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface BaseInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
  rightElement?: React.ReactNode;
}

export function BaseInput({
  label,
  error,
  containerClassName,
  rightElement,
  className,
  ...props
}: BaseInputProps) {
  return (
    <View className={cn(`mb-4 w-full`, containerClassName)}>
      {label && (
        <Text className="mb-1.5 text-sm font-semibold text-foreground">
          {label}
        </Text>
      )}
      <View
        className={cn(
          "border rounded-2xl py-1 px-3 flex-row items-center gap-2",
          error ? "border-destructive" : "border-border",
        )}
      >
        <TextInput
          className={cn("font-sans flex-1", className)}
          placeholderTextColor={`#666666`}
          {...props}
        />
        {rightElement}
      </View>
      {error && (
        <Text className="mt-1 text-xs text-destructive font-sans">{error}</Text>
      )}
    </View>
  );
}
