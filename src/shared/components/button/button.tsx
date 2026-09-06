import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

const buttonVariants = cva(
  "flex-row items-center justify-center rounded-xl px-4 py-3 active:opacity-90",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        outline: "border border-border bg-transparent",
        ghost: "bg-transparent",
        destructive: "bg-destructive",
      },
      size: {
        sm: "px-3 py-2 rounded-lg",
        md: "px-4 py-3 rounded-xl",
        lg: "px-6 py-4 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

// 2. Define corresponding text variants
const textVariants = cva("font-medium text-center", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      outline: "text-foreground",
      ghost: "text-foreground",
      destructive: "text-destructive-foreground",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ButtonProps
  extends TouchableOpacityProps, VariantProps<typeof buttonVariants> {
  label?: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
}

export function Button({
  label,
  variant,
  size,
  disabled,
  loading,
  className,
  textClassName,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      className={cn(
        buttonVariants({ variant, size }),
        isDisabled && "opacity-50",
        className,
      )}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text className={cn(textVariants({ variant, size }), textClassName)}>
          {label || children}
        </Text>
      )}
    </TouchableOpacity>
  );
}
