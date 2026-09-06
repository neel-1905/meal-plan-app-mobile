import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { signUpSchema, SignUpValues } from "../lib/auth.validations";
import { FormInput } from "@/shared/components/inputs";
import { Button } from "@/shared/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { useSignUp } from "../hooks/use-sign-up.hook";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export const SignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const { mutateAsync, isPending } = useSignUp();

  const onSubmit = async (data: SignUpValues) => {
    await mutateAsync(data);
  };

  return (
    <KeyboardAwareScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      bottomOffset={15}
    >
      <View className="flex flex-col gap-4">
        <FormInput
          control={control}
          name="name"
          label="Name"
          placeholder="Enter full name"
          autoCapitalize="words"
        />

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
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
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
        />

        <FormInput
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="****"
          secureTextEntry={!isConfirmPasswordVisible}
          autoCapitalize="none"
          rightElement={
            <TouchableOpacity
              onPress={() =>
                setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
              }
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
          className="mb-7"
          onPress={handleSubmit(onSubmit)}
          loading={isPending}
        >
          Sign Up
        </Button>

        <Text className="text-foreground-muted mx-auto font-sans">
          Already have an account?{" "}
          <Link className="text-foreground underline" href={`/sign-in`}>
            Sign In
          </Link>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};
