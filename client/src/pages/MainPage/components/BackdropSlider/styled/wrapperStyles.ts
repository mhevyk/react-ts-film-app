import { media } from "@theme/mediaQueries";
import { css } from "styled-components";

export const wrapperStyles = css`
  @media ${media.screens.lg} {
    & > :first-child {
      left: ${(props) =>
        props.theme.globals.contentContainerSpacing +
        props.theme.globals.sliderSpacing}px;
    }
  }
`;
