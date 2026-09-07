import { cn } from "@/shared/utils";
import React from "react";
import { Text, TextProps } from "react-native";

// Define weights based on your design variables
type FontVariant =
  "light" | "normal" | "medium" | "semibold" | "bold" | "black";

interface TypographyProps extends TextProps {
  variant?: FontVariant;
  children: React.ReactNode;
  className?: string; // Allows passing extra Tailwind classes (like text-lg, text-red-500, etc.)
}

export const AppText: React.FC<TypographyProps> = ({
  variant = "normal", // Default to normal Poppins
  children,
  className = "",
  ...props
}) => {
  // Map variant props to the corresponding font style classes
  const fontClassMap: Record<FontVariant, string> = {
    light: "font-light", // maps to --font-light
    normal: "font-normal", // maps to --font-normal
    medium: "font-medium", // maps to --font-medium
    semibold: "font-semibold", // maps to --font-semibold
    bold: "font-bold", // maps to --font-bold
    black: "font-black", // maps to --font-black
  };

  return (
    <Text
      className={cn(`${fontClassMap[variant]} text-foreground`, className)}
      {...props}
    >
      {children}
    </Text>
  );
};
