import { useForm } from "react-hook-form";
import { View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "@/shared/components/inputs";
import { Button } from "@/shared/components/button";

import {
  forgotPasswordSchema,
  ForgotPasswordValues,
} from "../lib/auth.validations";

import { useForgotPassword } from "../hooks/use-forgot-password.hook";

export const ForgotPasswordForm = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "all",
  });

  const { mutateAsync, isPending } = useForgotPassword();

  const onSubmit = async (data: ForgotPasswordValues) => {
    await mutateAsync(data);
  };

  return (
    <View className="gap-4">
      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="Enter email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Button
        className="mt-4"
        onPress={handleSubmit(onSubmit)}
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send Reset Link"}
      </Button>
    </View>
  );
};
