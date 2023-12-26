import { theme } from "./theme";

export const media = {
  screens: {
    xs: `@media screen and (min-width: ${theme.breakpoints.xs})`,
    sm: `@media screen and (min-width: ${theme.breakpoints.sm})`,
    md: `@media screen and (min-width: ${theme.breakpoints.md})`,
    lg: `@media screen and (min-width: ${theme.breakpoints.lg})`,
    xl: `@media screen and (min-width: ${theme.breakpoints.xl})`,
  },
} as const;
