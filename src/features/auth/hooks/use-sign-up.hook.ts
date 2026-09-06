import { useMutation } from "@tanstack/react-query";
import { authService } from "../lib/auth.service";
import Toast from "react-native-toast-message";
import { SignUpValues } from "../lib/auth.validations";

export const useSignUp = () => {
  return useMutation({
    mutationFn: ({ name, email, password }: SignUpValues) => {
      return authService.signUp(name, email, password);
    },

    onSuccess: (result) => {
      if (result.error) {
        Toast.show({
          type: "error",
          text1: "Sign Up failed",
          text2: result.error.message,
        });

        return;
      }

      Toast.show({
        type: "success",
        text1: "Sign up successful",
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
