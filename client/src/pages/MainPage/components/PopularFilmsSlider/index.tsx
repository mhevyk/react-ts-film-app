import { usePopularFilms } from "./hooks/usePopularFilms";
import { PosterSlider } from "../PosterSlider";

export function PopularFilmsSlider() {
  const query = usePopularFilms();

  return (
    <PosterSlider
      query={query}
      slideSize={{ width: 504, height: 736 }}
      spaceBetweenSlides={1}
    />
  );
}
