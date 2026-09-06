import { ResetPasswordForm } from "@/features/auth/ui/reset-password.form";
import { Heading } from "@/shared/components/ui";
import { ArrowLeft } from "lucide-react-native";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassword = () => {
  return (
    <View className="flex-1 p-safe-offset-4">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex flex-col gap-3 mb-5">
          <TouchableOpacity>
            <ArrowLeft size={30} />
          </TouchableOpacity>

          <Heading text="Forgot Password" />
        </View>

        <ResetPasswordForm />
      </SafeAreaView>
    </View>
  );
};

export default ResetPassword;
