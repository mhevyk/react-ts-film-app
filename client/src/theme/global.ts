import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { media } from "./mediaQueries";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: ${theme.colors.background};
  }

  @media ${media.screens.lg} {
      .backdrop-slider .navigation-button-prev {
        left: calc(${theme.globals.sliderSpacing} + ${theme.globals.contentContainerSpacing});
      }
    }
`;
