import { Pressable, Animated } from "react-native";
import { useEffect, useRef } from "react";

interface AppSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const AppSwitch = ({ value, onValueChange }: AppSwitchProps) => {
  const translateX = useRef(new Animated.Value(value ? 24 : 0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? 24 : 0,
      useNativeDriver: true,
      tension: 120,
      friction: 8,
    }).start();
  }, [value, translateX]);

  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      className={`h-8 w-14 rounded-full justify-center px-1 ${
        value ? "bg-primary" : "bg-primary-muted"
      }`}
    >
      <Animated.View
        className="h-6 w-6 rounded-full bg-white"
        style={{
          transform: [{ translateX }],
        }}
      />
    </Pressable>
  );
};
