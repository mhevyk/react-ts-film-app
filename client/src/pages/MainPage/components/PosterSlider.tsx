import { Slider } from "@components/ui/Slider";
import { repeatComponent } from "@utils/repeatComponent";
import { UseQueryResult } from "@tanstack/react-query";
import { FilmPosterSlide, SkeletonPosterSlide } from "./FilmPosterSlide";
import styled from "styled-components";
import { Button } from "@components/ui/Button";
import { UpcomingFilm } from "@schemas/filmSchema";

type PosterSliderProps = {
  query: UseQueryResult<UpcomingFilm[]>;
  slideSize: {
    width: number;
    height: number;
  };
  spaceBetweenSlides: number;
};

const ErrorWrapper = styled.div<{ $height: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: ${(props) => props.$height}px;
  background-color: ${(props) => props.theme.colors.lightWithOpacity(0.15)};
  text-align: center;
`;

const ErrorLabel = styled.span`
  font-size: 50px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.lightWithOpacity(0.4)};
`;

const ErrorMessage = styled.span`
  font-size: 20px;
`;

export function PosterSlider({
  query: { data: slides = [], isLoading, isError, error, refetch },
  slideSize: { width, height },
  spaceBetweenSlides,
}: PosterSliderProps) {
  const shouldRenderSkeleton = isLoading && slides.length === 0;

  return (
    <Slider
      spaceBetween={spaceBetweenSlides}
      slidesPerView={isError ? 1 : "auto"}
      navigationControls
    >
      {shouldRenderSkeleton &&
        repeatComponent(
          <SkeletonPosterSlide width={width} height={height} />,
          8
        )}
      {slides.length !== 0 &&
        slides.map((slide, index) => (
          <FilmPosterSlide
            key={`${index}-${slide.id}`}
            film={slide}
            width={width}
            height={height}
          />
        ))}
      {isError && error && (
        <ErrorWrapper $height={height}>
          <ErrorLabel>Error</ErrorLabel>
          <ErrorMessage>{error.message}</ErrorMessage>
          <Button variant="primary" onClick={() => refetch()}>
            Try Again
          </Button>
        </ErrorWrapper>
      )}
    </Slider>
  );
}
