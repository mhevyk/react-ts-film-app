import styled, { css } from "styled-components";
import { Slider } from "@components/ui/Slider";
import { media } from "@theme/mediaQueries";
import { useFilms } from "./hooks/useFilms";
import { renderSkeleton } from "./utils/renderSkeleton";
import { renderSlide } from "./utils/renderSlide";
import { renderError } from "./utils/renderError";

const createSlideCSS = (isError: boolean) => css`
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

  ${() => {
    if (isError) {
      return css`
        background-color: ${(props) =>
          props.theme.colors.lightWithOpacity(0.1)};
      `;
    }
  }}
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

const SlideContentWrapper = styled.article`
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

export function BackdropSlider() {
  const slides = useFilms([399566, 297762, 791373]);

  const isLoading = slides.some((slide) => slide.isLoading);

  return (
    <Slider
      variant="full-screen"
      slides={slides}
      renderSlide={(slide) => (
        <SlideContentWrapper>
          {slide.isError ? renderError(slide.error) : renderSlide(slide.data!)}
        </SlideContentWrapper>
      )}
      skeleton={{
        display: isLoading,
        renderSkeleton: () => (
          <SlideContentWrapper>{renderSkeleton()}</SlideContentWrapper>
        ),
        skeletonVariant: "append-slides",
      }}
      slideStyles={(slide) => createSlideCSS(slide.isError)}
      wrapperStyles={wrapperStyles}
      pagination
      navigationControls
      autoplay
    />
  );
}
