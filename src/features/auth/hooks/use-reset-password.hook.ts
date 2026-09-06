import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

import { authClient } from "../lib/auth-client";

interface ResetPasswordData {
  token: string;
  password: string;
}

export const useResetPassword = () => {
  return useMutation({
    mutationFn: async ({ token, password }: ResetPasswordData) => {
      return authClient.resetPassword({
        token,
        newPassword: password,
      });
    },

    onSuccess: (result) => {
      if (result.error) {
        Toast.show({
          type: "error",
          text1: "Password reset failed",
          text2: result.error.message,
        });

        return;
      }

      Toast.show({
        type: "success",
        text1: "Password reset",
        text2: "Your password has been changed successfully.",
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
