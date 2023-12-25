import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: ${theme.colors.primary};
    --color-background: ${theme.colors.background};
  }
`;
