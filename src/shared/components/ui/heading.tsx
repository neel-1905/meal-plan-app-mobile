import { cn } from "@/shared/utils";
import { Text } from "react-native";

export const Heading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <Text className={cn("text-3xl font-semibold leading-10", className)}>
      {text}
    </Text>
  );
};
