import { View } from "react-native";
import { AppText } from "./app-text";

export const ErrorScreen = ({
  error = "Something went wrong",
}: {
  error?: string;
}) => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <AppText>{error}</AppText>
    </View>
  );
};
