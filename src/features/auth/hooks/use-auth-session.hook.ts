import { authClient } from "../lib/auth-client";

export const useAuthSession = () => {
  return authClient.useSession();
};
