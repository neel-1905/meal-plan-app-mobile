import { useMutation } from "@tanstack/react-query";
import { authService } from "../lib/auth.service";
import Toast from "react-native-toast-message";
import { LoginValues } from "../lib/auth.validations";

export const useSignIn = () => {
  return useMutation({
    mutationFn: ({ email, password }: LoginValues) => {
      return authService.signIn(email, password);
    },

    onSuccess: (result) => {
      if (result.error) {
        Toast.show({
          type: "error",
          text1: "Sign in failed",
          text2: result.error.message,
        });

        return;
      }

      Toast.show({
        type: "success",
        text1: "Welcome back!",
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
