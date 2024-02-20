import { Slide } from "@components/ui/Slider";
import { media } from "@theme/mediaQueries";
import styled from "styled-components";

// passing tag once to avoid passing it multiple times in many components
export const BackdropSlide = styled(Slide).attrs(() => ({
  tag: "article",
}))`
  --padding-x: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  height: 75vh;
  padding: 0 var(--padding-x);

  @media ${media.screens.xs} {
    --padding-x: 12vw;
  }

  @media ${media.screens.md} {
    min-height: 600px;
    max-height: 648px;
    height: auto;
  }

  @media ${media.screens.lg} {
    --padding-x: calc(
      ${(props) => props.theme.globals.contentContainerSpacing}px + 10%
    );
  }

  background-color: ${(props) => props.theme.colors.lightWithOpacity(0.15)};
`;
