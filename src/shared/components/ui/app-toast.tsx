import { Text, View } from "react-native";
import { AlertCircle, CheckCircle } from "lucide-react-native";

type ToastProps = {
  text1?: string;
  text2?: string;
};

export const SuccessToast = ({ text1, text2 }: ToastProps) => {
  return (
    <View className="mx-4 flex-row items-center rounded-2xl bg-white px-4 py-3 shadow-lg">
      <CheckCircle size={22} color="#16a34a" />

      <View className="ml-3 flex-1">
        {text1 && (
          <Text className="font-semibold text-foreground">{text1}</Text>
        )}

        {text2 && (
          <Text className="mt-0.5 text-sm text-foreground-muted">{text2}</Text>
        )}
      </View>
    </View>
  );
};

export const ErrorToast = ({ text1, text2 }: ToastProps) => {
  return (
    <View className="mx-4 flex-row items-center rounded-2xl bg-white px-4 py-3 shadow-lg font-sans">
      <AlertCircle size={30} color="#dc2626" />

      <View className="ml-3 flex-1">
        {text1 && (
          <Text className="font-semibold text-foreground">{text1}</Text>
        )}

        {text2 && (
          <Text className="text-sm text-foreground-muted font-sans">
            {text2}
          </Text>
        )}
      </View>
    </View>
  );
};
