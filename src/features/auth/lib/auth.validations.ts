import { z } from "zod";

export const loginSchema = z.object({
  // name: z
  //   .string()
  //   .min(2, "Name should be minimum 2 characters")
  //   .max(50, "Name should be maximum 50 characters"),
  email: z.email("Invalid email id"),

  password: z.string().min(1, "Password is required"),
});

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name should be minimum 2 characters")
      .max(50, "Name should be maximum 50 characters"),

    email: z.email("Invalid email id"),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(30, { message: "Password cannot exceed 30 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character",
      }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // 👈 This highlights the confirmPassword field in form libraries
  });

export type LoginValues = z.infer<typeof loginSchema>;

export type SignUpValues = z.infer<typeof signUpSchema>;

export const forgotPasswordSchema = z.object({
  email: z.email("Please enter a valid email"),
});

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
