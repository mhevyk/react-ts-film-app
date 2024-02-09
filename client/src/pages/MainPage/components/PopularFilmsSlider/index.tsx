import { css } from "styled-components";
import { usePopularFilms } from "./hooks/usePopularFilms";
import { PosterSlider } from "../PosterSlider";
import { renderSlide } from "../UpcomingFilmsSlider/utils/renderSlide";
import { renderSkeleton } from "../UpcomingFilmsSlider/utils/renderSkeleton";
import { renderError } from "../UpcomingFilmsSlider/utils/renderError";

export function PopularFilmsSlider() {
  const query = usePopularFilms();

  return (
    <PosterSlider
      query={query}
      renderSlide={renderSlide}
      renderSkeleton={renderSkeleton}
      renderError={renderError}
      slideStyles={css`
        width: 504px;
        height: 736px;
      `}
    />
  );
}
