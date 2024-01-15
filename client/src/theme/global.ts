import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { media } from "./mediaQueries";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: ${theme.colors.primary};
    --color-secondary: ${theme.colors.secondary};
    --color-accent: ${theme.colors.accent};
    --color-background: rgb(${theme.colors.backgroundWithOpacity(1)});
  }

  @media ${media.screens.lg} {
      .backdrop-slider .navigation-button-prev {
        left: calc(${theme.globals.sliderSpacing} + ${
  theme.globals.contentContainerSpacing
});
      }
    }
`;
