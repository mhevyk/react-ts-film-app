import { Slider } from "@components/ui/Slider";
import { repeatComponent } from "@utils/repeatComponent";
import { UseQueryResult } from "@tanstack/react-query";
import { ReactNode } from "react";
import { PosterSlide } from "@components/styled/PosterSlide";
import { RuleSet } from "styled-components";

type PosterSliderProps<TData extends { id: number }> = {
  query: UseQueryResult<TData[]>;
  renderSlide: (slide: TData) => ReactNode;
  renderError: (
    error: Error,
    refetch: UseQueryResult<TData[]>["refetch"]
  ) => ReactNode;
  renderSkeleton: () => ReactNode;
  slideStyles?: RuleSet;
};

export function PosterSlider<TData extends { id: number }>({
  query: { data: slides = [], isLoading, isError, error, refetch },
  renderSlide,
  renderSkeleton,
  renderError,
  slideStyles,
}: PosterSliderProps<TData>) {
  const shouldRenderSkeleton = isLoading && slides.length === 0;

  return (
    <Slider
      spaceBetween={1}
      slidesPerView={isError ? 1 : "auto"}
      navigationControls
    >
      {shouldRenderSkeleton &&
        repeatComponent(
          <PosterSlide $css={slideStyles} $isLoading>
            {renderSkeleton()}
          </PosterSlide>,
          8
        )}
      {slides.length !== 0 &&
        slides.map((slide, index) => (
          <PosterSlide $css={slideStyles} key={`${index}-${slide.id}`}>
            {renderSlide(slide)}
          </PosterSlide>
        ))}
      {isError && error && (
        <PosterSlide $css={slideStyles}>
          {renderError(error, refetch)}
        </PosterSlide>
      )}
    </Slider>
  );
}
