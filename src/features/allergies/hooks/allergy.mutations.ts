import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient, apiRequest } from "@/shared/lib";
import Toast from "react-native-toast-message";

interface UpdateUserAllergensRequest {
  allergenIds: string[];
}

export const useUpdateUserAllergens = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserAllergensRequest) =>
      apiRequest<void>(apiClient.put("/user-allergens", data)),

    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Allergies updated",
      });

      queryClient.invalidateQueries({
        queryKey: ["user-allergens"],
      });
    },

    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Failed to update allergies",
        text2: error.message,
      });
    },
  });
};
