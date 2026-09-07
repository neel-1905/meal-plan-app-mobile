import { useMutation } from "@tanstack/react-query";
import { apiClient, apiRequest } from "@/shared/lib";
import Toast from "react-native-toast-message";

interface UpdateUserDietTypesRequest {
  dietTypeIds: string[];
}

export const useUpdateUserDietTypes = () => {
  return useMutation({
    mutationFn: (data: UpdateUserDietTypesRequest) =>
      apiRequest<void>(apiClient.put("/user-diet-types", data)),

    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Diet preferences updated",
      });
    },

    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Failed to update diet preferences",
        text2: error.message,
      });
    },
  });
};
