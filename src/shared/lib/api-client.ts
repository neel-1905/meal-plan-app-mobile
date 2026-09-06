import { authClient } from "@/features/auth/lib/auth-client";
import axios from "axios";
import { ApiErrorResponse, ApiSuccessResponse } from "../types/api.types";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_BASE_URL) throw new Error("API_BASE_URL is missing");

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const cookies = await authClient.getCookie();

  if (cookies) {
    config.headers.Cookie = cookies;
  }

  return config;
});

export async function apiRequest<T>(
  request: Promise<{
    data: ApiSuccessResponse<T>;
  }>,
): Promise<T> {
  try {
    const response = await request;

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      throw error.response.data as ApiErrorResponse;
    }

    throw {
      success: false,
      message: "Network error",
      error: error instanceof Error ? error.message : "Unknown error",
      statusCode: 0,
    } satisfies ApiErrorResponse;
  }
}
