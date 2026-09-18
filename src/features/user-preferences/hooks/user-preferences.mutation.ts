import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient, apiRequest } from "@/shared/lib";
import Toast from "react-native-toast-message";
import { ReminderDay, ServingSize } from "../types/user-preferences.types";

interface UpdateUserPreferencesRequest {
  defaultServings?: ServingSize;
  reminderEnabled?: boolean;
  reminderDay?: ReminderDay | null;
  reminderTime?: string | null;
  onboardingCompleted?: boolean;
}

export const useUpdateUserPreferences = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserPreferencesRequest) => {
      console.log("request data", data);
      return apiRequest<void>(apiClient.put("/user-preferences", data));
    },

    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "User preferences updated",
      });

      queryClient.invalidateQueries({
        queryKey: ["user-preferences"],
      });
    },

    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Failed to update user preferences",
        text2: error.message,
      });
    },
  });
};
