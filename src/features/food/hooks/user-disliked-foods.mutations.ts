import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient, apiRequest } from "@/shared/lib";
import Toast from "react-native-toast-message";

interface UpdateUserDislikedFoodsRequest {
  foodIds: string[];
}

export const useUpdateUserDislikedFoods = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserDislikedFoodsRequest) =>
      apiRequest<void>(apiClient.put("/user-disliked-foods", data)),

    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "User dislikes updated",
      });

      queryClient.invalidateQueries({
        queryKey: ["user-disliked-foods"],
      });
    },

    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Failed to update user dislikes",
        text2: error.message,
      });
    },
  });
};
