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
    <View className={`mb-4 w-full ${containerClassName || ""}`}>
      {label && (
        <Text className="mb-1.5 text-sm font-semibold text-foreground">
          {label}
        </Text>
      )}
      <View
        className={`flex-row items-center border rounded-lg bg-white h-12 px-3 ${
          error ? "border-destructive" : "border-border"
        }`}
      >
        <TextInput
          className={`flex-1 text-base text-foreground h-full ${className || ""}`}
          placeholderTextColor="#9ca3af"
          {...props}
        />
        {rightElement && <View className="ml-2">{rightElement}</View>}
      </View>
      {error && <Text className="mt-1 text-xs text-destructive">{error}</Text>}
    </View>
  );
}
