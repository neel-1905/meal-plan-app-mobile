import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import * as Linking from "expo-linking";

import { authClient } from "../lib/auth-client";
import { ForgotPasswordValues } from "../lib/auth.validations";

export const useForgotPassword = () => {
  const redirectTo = Linking.createURL("reset-password");

  return useMutation({
    mutationFn: async ({ email }: ForgotPasswordValues) => {
      return authClient.requestPasswordReset({
        email,
        redirectTo,
      });
    },

    onSuccess: (result) => {
      if (result.error) {
        Toast.show({
          type: "error",
          text1: "Unable to send reset link",
          text2: result.error.message,
        });

        return;
      }

      Toast.show({
        type: "success",
        text1: "Reset link sent",
        text2: "Check your email to reset your password.",
      });
    },

    onError: () => {
      Toast.show({
        type: "error",
        text1: "Something went wrong",
        text2: "Please try again.",
      });
    },
  });
};
