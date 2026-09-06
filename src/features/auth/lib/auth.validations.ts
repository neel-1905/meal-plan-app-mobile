import { z } from "zod";

export const loginSchema = z.object({
  // name: z
  //   .string()
  //   .min(2, "Name should be minimum 2 characters")
  //   .max(50, "Name should be maximum 50 characters"),
  email: z.email("Invalid email id"),

  password: z.string().min(1, "Password is required"),
});

export type LoginValues = z.infer<typeof loginSchema>;
