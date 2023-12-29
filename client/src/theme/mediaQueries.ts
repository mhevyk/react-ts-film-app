import theme from "./theme";

export const media = {
  screens: {
    xs: `(min-width: ${theme.breakpoints.xs})`,
    sm: `(min-width: ${theme.breakpoints.sm})`,
    md: `(min-width: ${theme.breakpoints.md})`,
    lg: `(min-width: ${theme.breakpoints.lg})`,
    xl: `(min-width: ${theme.breakpoints.xl})`,
  },
} as const;
