import styled, { css } from "styled-components";
import { Slider, Slide } from "@components/ui/Slider";
import { media } from "@theme/mediaQueries";
import { useFilms } from "./hooks/useFilms";
import { renderSkeleton } from "./utils/renderSkeleton";
import { renderFilm } from "./utils/renderFilm";
import { renderError } from "./utils/renderError";
import { UseQueryResult } from "@tanstack/react-query";
import { SimpleFilm } from "@schemas/filmSchema";

const BackdropSlide = styled(Slide)`
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

// Adding shift for prev arrow to avoid layering with sidebar
const wrapperStyles = css`
  @media ${media.screens.lg} {
    & > :first-child {
      left: ${(props) =>
        props.theme.globals.contentContainerSpacing +
        props.theme.globals.sliderSpacing}px;
    }
  }
`;

function renderSlideContent(slide: UseQueryResult<SimpleFilm>) {
  if (slide.isLoading) {
    return renderSkeleton();
  }

  if (slide.isError) {
    return renderError(slide.error);
  }

  return renderFilm(slide.data!);
}

export function BackdropSlider() {
  const slides = useFilms([399566, 297762, 791373]);

  return (
    <Slider
      effect="fade"
      wrapperStyles={wrapperStyles}
      pagination
      navigationControls
      loop
      autoplay
      noSwiping
    >
      {slides.map((slide, index) => (
        <BackdropSlide key={index} tag="article">
          {renderSlideContent(slide)}
        </BackdropSlide>
      ))}
    </Slider>
  );
}
