import { useThemeColors } from "@/shared/hooks/use-theme-colors.hook";
import { Tabs } from "expo-router";
import { Heart, Settings, ShoppingBasket, Utensils } from "lucide-react-native";

const AppTabsLayout = () => {
  const { primary, foregroundMuted } = useThemeColors();

  return (
    <Tabs
      initialRouteName="meal-plan"
      screenOptions={{
        headerPressColor: "transparent",
        headerShown: false,
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: foregroundMuted,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 80,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 2,
          fontWeight: 500,
        },
      }}
    >
      <Tabs.Screen
        name="meal-plan"
        options={{
          headerShown: false,
          title: "Meal Plan",
          tabBarIcon: ({ focused }) => (
            <Utensils color={focused ? primary : foregroundMuted} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="groceries"
        options={{
          headerShown: false,
          title: "Groceries",
          tabBarIcon: ({ focused }) => (
            <ShoppingBasket
              color={focused ? primary : foregroundMuted}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerShown: false,
          title: "Favorites",
          tabBarIcon: ({ focused }) => (
            <Heart color={focused ? primary : foregroundMuted} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <Settings color={focused ? primary : foregroundMuted} size={24} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppTabsLayout;
