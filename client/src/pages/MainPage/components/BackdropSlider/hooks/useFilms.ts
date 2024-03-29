import { SimpleFilm } from "@schemas/filmSchema";
import FilmService from "@services/FilmService";
import { UseQueryOptions, useQueries } from "@tanstack/react-query";
import { QUERY_KEYS } from "@data/queryKeys";

export function useFilms(filmIds: Array<SimpleFilm["id"]>) {
  return useQueries({
    queries: filmIds.map<UseQueryOptions<SimpleFilm>>((filmId) => {
      return {
        queryKey: [QUERY_KEYS.film, filmId],
        queryFn: () => FilmService.getFilmById(filmId),
        retry: false,
      };
    }),
  });
}
