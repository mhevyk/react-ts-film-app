import { FilmWithDetails } from "@schemas/filmSchema";
import FilmService from "@services/FilmService";
import { useSuspenseQueries } from "@suspensive/react-query";
import { QUERY_KEYS } from "@data/queryKeys";

export function useFilms(filmIds: Array<FilmWithDetails["id"]>) {
  return useSuspenseQueries({
    queries: filmIds.map((filmId) => ({
      queryKey: [QUERY_KEYS.film, filmId],
      queryFn: () => FilmService.getFilmById(filmId),
      retry: false,
    })),
  });
}
