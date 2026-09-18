import { cn } from "@/shared/utils";
import { Clock } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

interface TimeInputProps {
  label?: string;
  value?: string | null;
  placeholder?: string;
  error?: string;
  containerClassName?: string;
  onPress: () => void;
  disabled?: boolean;
}

export function TimeInput({
  label,
  value,
  placeholder = "Select time",
  error,
  containerClassName,
  onPress,
  disabled = false,
}: TimeInputProps) {
  return (
    <View className={cn("w-full", containerClassName)}>
      {label && (
        <Text className="mb-1.5 text-sm font-semibold text-foreground">
          {label}
        </Text>
      )}

      <Pressable
        disabled={disabled}
        onPress={onPress}
        className={cn(
          "border rounded-2xl py-3 px-3 flex-row items-center justify-between",
          error ? "border-destructive" : "border-border",
          disabled ? "opacity-50" : "",
        )}
      >
        <Text
          className={cn(
            "font-sans",
            value ? "text-foreground" : "text-foreground-muted",
          )}
        >
          at {value ?? placeholder}
        </Text>

        <Clock size={20} className="text-foreground-muted" />
      </Pressable>

      {error && (
        <Text className="mt-1 text-xs text-destructive font-sans">{error}</Text>
      )}
    </View>
  );
}
