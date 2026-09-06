import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL;

if (!baseURL) {
  throw new Error("EXPO_PUBLIC_API_BASE_URL is not defined");
}

export const authClient = createAuthClient({
  baseURL, // Base URL of your Better Auth backend.
  plugins: [
    expoClient({
      scheme: "mealplanappfrontend",
      storagePrefix: "mealplanappfrontend",
      storage: SecureStore,
    }),
  ],
});
