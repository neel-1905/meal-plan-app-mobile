import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react-native";

import { FormInput } from "@/shared/components/inputs";
import { Button } from "@/shared/components/button";

import {
  resetPasswordSchema,
  ResetPasswordValues,
} from "../lib/auth.validations";

import { useResetPassword } from "../hooks/use-reset-password.hook";

export const ResetPasswordForm = () => {
  const { token } = useLocalSearchParams<{ token?: string }>();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const { control, handleSubmit } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });

  const { mutateAsync, isPending } = useResetPassword();

  const onSubmit = async (data: ResetPasswordValues) => {
    if (!token) {
      return;
    }

    await mutateAsync({
      token,
      password: data.password,
    });
  };

  return (
    <View className="gap-4">
      <FormInput
        control={control}
        name="password"
        label="New Password"
        placeholder="Enter new password"
        autoCapitalize="none"
        secureTextEntry={!isPasswordVisible}
        rightElement={
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)}
          >
            {isPasswordVisible ? (
              <EyeClosed size={20} color="#666" />
            ) : (
              <Eye size={20} color="#666" />
            )}
          </TouchableOpacity>
        }
      />

      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm new password"
        autoCapitalize="none"
        secureTextEntry={!isConfirmPasswordVisible}
        rightElement={
          <TouchableOpacity
            onPress={() => setIsConfirmPasswordVisible((prev) => !prev)}
          >
            {isConfirmPasswordVisible ? (
              <EyeClosed size={20} color="#666" />
            ) : (
              <Eye size={20} color="#666" />
            )}
          </TouchableOpacity>
        }
      />

      <Button
        className="mt-4"
        onPress={handleSubmit(onSubmit)}
        disabled={isPending || !token}
      >
        {isPending ? "Resetting..." : "Reset Password"}
      </Button>
    </View>
  );
};
