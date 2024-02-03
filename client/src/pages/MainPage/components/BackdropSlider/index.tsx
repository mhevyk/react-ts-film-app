import styled, { css } from "styled-components";
import { Slider } from "@components/ui/Slider";
import { media } from "@theme/mediaQueries";
import { useFilms } from "./hooks/useFilms";
import { UseQueryResult } from "@tanstack/react-query";
import { renderSkeleton } from "./utils/renderSkeleton";
import { renderSlide } from "./utils/renderSlide";
import { Film } from "@schemas/filmSchema";

const createSlideCSS = (isLoading: boolean, isError: boolean) => css`
  display: flex;
  align-items: center;

  height: 75vh;

  @media ${media.screens.md} {
    min-height: 600px;
    max-height: 648px;
    padding: 30px 0 60px;
    height: auto;
  }

  @media ${media.screens.lg} {
    padding: 0;
  }

  ${(props) => {
    if (isLoading || isError) {
      return css`
        background-color: ${props.theme.colors.lightWithOpacity(0.1)};
      `;
    }
  }}
`;

const FilmWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
  width: 100%;

  @media ${media.screens.xs} {
    padding: 0 12vw;
  }

  @media ${media.screens.md} {
    padding: 0
      calc(${(props) => props.theme.globals.contentContainerSpacing}px + 10%);
  }
`;

function renderResult(slide: UseQueryResult<Film>) {
  if (slide.isLoading) {
    return renderSkeleton();
  }

  if (slide.isError) {
    return <p style={{ textAlign: "center" }}>Error: {slide.error.message}</p>;
  }

  return renderSlide(slide.data!);
}

export function BackdropSlider() {
  const slides = useFilms([399566, 297762, 791373]);

  return (
    <Slider
      variant="full-screen"
      slides={slides}
      renderSlide={(slide) => <FilmWrapper>{renderResult(slide)}</FilmWrapper>}
      slideStyles={(slide) => createSlideCSS(slide.isLoading, slide.isError)}
      wrapperStyles={css`
        // Adding shift for prev arrow to avoid layering with sidebar
        @media ${media.screens.lg} {
          & > :first-child {
            left: ${(props) =>
              props.theme.globals.contentContainerSpacing +
              props.theme.globals.sliderSpacing}px;
          }
        }
      `}
      pagination
      navigationControls
      autoplay
    />
  );
}
