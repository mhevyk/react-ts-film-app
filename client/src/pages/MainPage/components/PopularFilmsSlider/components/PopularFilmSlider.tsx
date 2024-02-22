import { Slider } from "@components/ui/Slider";
import { FilmPoster } from "@components/styled/FilmPoster";
import { PopularFilmSlide } from "../styled/PopularFilmSlide";
import { usePopularFilms } from "../hooks/usePopularFilms";

export function PopularFilmSlider() {
  const { data: films } = usePopularFilms();

  return (
    <Slider navigationControls spaceBetween={1}>
      {films.map((film) => (
        <PopularFilmSlide key={film.id}>
          <FilmPoster film={film} />
        </PopularFilmSlide>
      ))}
    </Slider>
  );
}
