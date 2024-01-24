import theme from "./theme";

export const media = {
  screens: {
    xs: `(min-width: ${theme.breakpoints.xs}px)`,
    sm: `(min-width: ${theme.breakpoints.sm}px)`,
    md: `(min-width: ${theme.breakpoints.md}px)`,
    lg: `(min-width: ${theme.breakpoints.lg}px)`,
    xl: `(min-width: ${theme.breakpoints.xl}px)`,
  },
} as const;
