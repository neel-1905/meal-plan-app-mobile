import { queryOptions } from "@tanstack/react-query";
import type { DietType } from "../types/diet-types.types";
import { apiClient, apiRequest } from "@/shared/lib";

export const dietTypesQueryOptions = () =>
  queryOptions({
    queryKey: ["diet-types"],
    queryFn: () => apiRequest<DietType[]>(apiClient.get("/diet-types")),
  });
