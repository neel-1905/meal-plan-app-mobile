import { Heading } from "@/shared/components/ui";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { SignInForm } from "@/features/auth/ui/sign-in-form";

const SignIn = () => {
  return (
    <View className="flex-1 p-safe-offset-4">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex flex-col gap-3 mb-5">
          <TouchableOpacity>
            <ArrowLeft size={30} />
          </TouchableOpacity>

          <Heading text="Sign In" />
        </View>

        <SignInForm />
      </SafeAreaView>
    </View>
  );
};

export default SignIn;
