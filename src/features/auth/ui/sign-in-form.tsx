import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { loginSchema, LoginValues } from "../lib/auth.validations";
import { FormInput } from "@/shared/components/inputs";
import { Button } from "@/shared/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { useSignIn } from "../hooks/use-sign-in.hook";

export const SignInForm = () => {
  const { control, handleSubmit } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { mutateAsync, isPending } = useSignIn();

  const onSubmit = async (data: LoginValues) => {
    await mutateAsync(data);
  };

  return (
    <View className="flex flex-col gap-4">
      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="Enter email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <FormInput
        control={control}
        name="password"
        label="Password"
        placeholder="****"
        // keyboardType=""
        autoCapitalize="none"
        // secureTextEntry={!isPasswordVisible}
        rightElement={
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <EyeClosed size={20} color="#666" />
            ) : (
              <Eye size={20} color="#666" />
            )}
          </TouchableOpacity>
        }
        secureTextEntry={!isPasswordVisible}
      />

      <Link
        href={`/forgot-password`}
        className="ml-auto underline text-sm font-sans"
      >
        Forgot Password
      </Link>

      <Button
        className="mb-7"
        onPress={handleSubmit(onSubmit)}
        loading={isPending}
      >
        Sign In
      </Button>

      <Text className="text-foreground-muted mx-auto font-sans">
        Not a member?{" "}
        <Link className="text-foreground underline" href={`/sign-up`}>
          Sign Up
        </Link>
      </Text>
    </View>
  );
};
