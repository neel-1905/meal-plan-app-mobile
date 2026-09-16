import { queryOptions } from "@tanstack/react-query";
import { apiClient, apiRequest } from "@/shared/lib";
import type { Food } from "../types/food.types";

export const foodsQueryOptions = (search?: string) =>
  queryOptions({
    queryKey: ["foods", search],
    queryFn: () =>
      apiRequest<Food[]>(
        apiClient.get("/foods", {
          params: { search },
        }),
      ),
  });

export const userDislikedFoodsQueryOptions = () =>
  queryOptions({
    queryKey: ["user-disliked-foods"],
    queryFn: () => apiRequest<Food[]>(apiClient.get("/user-disliked-foods")),
  });
