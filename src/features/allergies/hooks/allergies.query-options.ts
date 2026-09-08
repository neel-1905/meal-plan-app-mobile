import { queryOptions } from "@tanstack/react-query";
import { apiClient, apiRequest } from "@/shared/lib";
import type { Allergen } from "../types/allergens.types";

export const allergensQueryOptions = () =>
  queryOptions({
    queryKey: ["allergens"],
    queryFn: () => apiRequest<Allergen[]>(apiClient.get("/allergens")),
  });
