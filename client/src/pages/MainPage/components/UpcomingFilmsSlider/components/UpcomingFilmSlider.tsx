import { Slider } from "@components/ui/Slider";
import { useUpcomingFilms } from "../hooks/useUpcomingFilms";
import { FilmPoster } from "@components/styled/FilmPoster";
import { UpcomingFilmSlide } from "../styled/UpcomingFilmSlide";

export function UpcomingFilmSlider() {
  const { data: films } = useUpcomingFilms();

  return (
    <Slider navigationControls spaceBetween={16}>
      {films.map((film) => (
        <UpcomingFilmSlide key={film.id}>
          <FilmPoster film={film} />
        </UpcomingFilmSlide>
      ))}
    </Slider>
  );
}
