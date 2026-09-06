import { authClient } from "./auth-client";

export const authService = {
  signIn(email: string, password: string) {
    return authClient.signIn.email({
      email,
      password,
    });
  },

  signUp(name: string, email: string, password: string) {
    return authClient.signUp.email({
      name,
      email,
      password,
    });
  },

  signOut() {
    return authClient.signOut();
  },

  getSession() {
    return authClient.getSession();
  },
};
