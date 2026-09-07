import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeft } from "lucide-react-native";
import { ExternalPathString, RelativePathString, router } from "expo-router";

export const BackButton = () => {
  return (
    <TouchableOpacity onPress={() => router.canGoBack() && router.back()}>
      <ArrowLeft size={30} />
    </TouchableOpacity>
  );
};
