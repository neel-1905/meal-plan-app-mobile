import { useCSSVariable } from "uniwind";

export function useThemeColors() {
  const [
    background,
    foreground,
    foregroundMuted,
    primary,
    primaryMuted,
    secondary,
    card,
    border,
    destructive,
    success,
    successMuted,
  ] = useCSSVariable([
    "--color-background",
    "--color-foreground",
    "--color-foreground-muted",
    "--color-primary",
    "--color-primary-muted",
    "--color-secondary",
    "--color-card",
    "--color-border",
    "--color-destructive",
    "--color-success",
    "--color-success-muted",
  ]);

  return {
    background,
    foreground,
    foregroundMuted,
    primary,
    primaryMuted,
    secondary,
    card,
    border,
    destructive,
    success,
    successMuted,
  } as Record<string, string>;
}
