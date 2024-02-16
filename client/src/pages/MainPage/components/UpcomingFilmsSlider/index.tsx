import { useUpcomingFilms } from "./hooks/useUpcomingFilms";
import { PosterSlider } from "../PosterSlider";

export function UpcomingFilmsSlider() {
  const query = useUpcomingFilms();

  return (
    <PosterSlider
      query={query}
      slideSize={{ width: 292, height: 440 }}
      spaceBetweenSlides={16}
    />
  );
}
