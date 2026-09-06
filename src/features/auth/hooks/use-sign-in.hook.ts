import { useMutation } from "@tanstack/react-query";
import { authService } from "../lib/auth.service";

export function useSignIn() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authService.signIn(email, password),
  });
}
