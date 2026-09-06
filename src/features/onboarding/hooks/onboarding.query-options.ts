import { queryOptions } from "@tanstack/react-query";

import { apiClient, apiRequest } from "@/shared/lib";
import { UserPreferences } from "../types/user-preferences.types";

export const userPreferencesQueryOptions = () =>
  queryOptions({
    queryKey: ["user-preferences"],
    queryFn: () =>
      apiRequest<UserPreferences>(apiClient.get("/user-preferences")),
  });
