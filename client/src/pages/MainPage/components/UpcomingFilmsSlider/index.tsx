import { Slide, Slider } from "@components/ui/Slider";
import styled, { css } from "styled-components";
import { renderSlide } from "./utils/renderSlide";
import { repeatComponent } from "@utils/repeatComponent";
import { renderSkeleton } from "./utils/renderSkeleton";
import { renderError } from "./utils/renderError";
import { UseQueryResult } from "@tanstack/react-query";
import { UpcomingFilm } from "@schemas/filmSchema";
import { useUpcomingFilms } from "./hooks/useUpcomingFilms";

type UpcomingFilmSlideProps = {
  $isLoading?: boolean;
  $isError?: boolean;
};

const UpcomingFilmSlide = styled(Slide)<UpcomingFilmSlideProps>`
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
}: UseQueryResult<UpcomingFilm[]>) {
  const isInitialLoading = isLoading && slides.length === 0;

  if (isInitialLoading) {
    return repeatComponent(
      <UpcomingFilmSlide $isLoading>{renderSkeleton()}</UpcomingFilmSlide>,
      8
    );
  }

  if (isError) {
    return (
      <UpcomingFilmSlide $isError>
        {renderError(error, refetch)}
      </UpcomingFilmSlide>
    );
  }

  return slides.map((slide, index) => (
    <UpcomingFilmSlide key={`${index}-${slide.id}`}>
      {renderSlide(slide)}
    </UpcomingFilmSlide>
  ));
}

export function UpcomingFilmsSlider() {
  const query = useUpcomingFilms();

  return (
    <Slider
      spaceBetween={1}
      slidesPerView={query.isError ? 1 : "auto"}
      navigationControls
    >
      {renderSlides(query)}
    </Slider>
  );
}
