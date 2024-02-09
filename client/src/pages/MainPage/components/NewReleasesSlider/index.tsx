import { Slide, Slider } from "@components/ui/Slider";
import styled, { css } from "styled-components";
import { useNewReleasesInfiniteQuery } from "./hooks/useNewReleasesInfiniteQuery";
import { renderSlide } from "./utils/renderSlide";
import { repeatComponent } from "@utils/repeatComponent";
import { renderSkeleton } from "./utils/renderSkeleton";
import { renderError } from "./utils/renderError";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { NewReleaseFilm } from "@schemas/filmSchema";

type NewReleaseSlideProps = {
  $isLoading?: boolean;
  $isError?: boolean;
};

const NewReleaseSlide = styled(Slide)<NewReleaseSlideProps>`
  padding: 0 24px 24px;
  width: 292px;
  height: 440px;
  overflow: hidden;

  ${(props) => {
    if (props.$isLoading || props.$isError) {
      return css`
        display: flex;
        flex-direction: column;
        justify-content: ${props.$isError ? "center" : "flex-end"};
        gap: 16px;
        background-color: ${props.theme.colors.lightWithOpacity(0.15)};
      `;
    }
  }}

  ${(props) => {
    if (props.$isError) {
      return css`
        align-items: center;
        color: ${props.theme.colors.white};
        font-size: 20px;
      `;
    }
  }}
`;

function renderSlides({
  isLoading,
  data: slides = [],
  isError,
  error,
  refetch,
}: UseInfiniteQueryResult<NewReleaseFilm[]>) {
  const isInitialLoading = isLoading && slides.length === 0;

  if (isInitialLoading) {
    return repeatComponent(
      <NewReleaseSlide $isLoading>{renderSkeleton()}</NewReleaseSlide>,
      8
    );
  }

  if (isError) {
    return (
      <NewReleaseSlide $isError>{renderError(error, refetch)}</NewReleaseSlide>
    );
  }

  return slides.map((slide, index) => (
    <NewReleaseSlide key={`${index}-${slide.id}`}>
      {renderSlide(slide)}
    </NewReleaseSlide>
  ));
}

export function NewReleasesSlider() {
  const query = useNewReleasesInfiniteQuery();

  return (
    <Slider
      spaceBetween={1}
      slidesPerView={query.isError ? 1 : "auto"}
      navigationControls
      onReachEnd={() => query.fetchNextPage()}
    >
      {renderSlides(query)}
    </Slider>
  );
}
