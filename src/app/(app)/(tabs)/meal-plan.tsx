import { authClient } from "@/features/auth/lib/auth-client";
import { router } from "expo-router";
import { View, Text } from "react-native";

const MealPlanScreen = () => {
  const handleLogout = async () => {
    await authClient.signOut();
    router.replace("/get-started");
  };

  return (
    <View>
      <Text onPress={() => handleLogout()}>MealPlanScreen</Text>
    </View>
  );
};

export default MealPlanScreen;
