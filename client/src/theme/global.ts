import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: ${theme.colors.primary};
    --color-secondary: ${theme.colors.secondary};
    --color-accent: ${theme.colors.accent};
    --color-background: rgb(${theme.colors.backgroundRGB});
  }
`;
