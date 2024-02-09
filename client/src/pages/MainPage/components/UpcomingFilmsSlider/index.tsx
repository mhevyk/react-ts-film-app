import { css } from "styled-components";
import { renderSlide } from "./utils/renderSlide";
import { renderSkeleton } from "./utils/renderSkeleton";
import { renderError } from "./utils/renderError";
import { useUpcomingFilms } from "./hooks/useUpcomingFilms";
import { PosterSlider } from "../PosterSlider";

export function UpcomingFilmsSlider() {
  const query = useUpcomingFilms();

  return (
    <PosterSlider
      query={query}
      renderSlide={renderSlide}
      renderSkeleton={renderSkeleton}
      renderError={renderError}
      slideStyles={css`
        width: 292px;
        height: 440px;
      `}
    />
  );
}
