import { Film } from "@schemas/filmSchema";
import FilmService from "@services/FilmService";
import { UseQueryOptions, useQueries } from "@tanstack/react-query";

export function useFilms(filmIds: Array<Film["id"]>) {
  return useQueries({
    queries: filmIds.map<UseQueryOptions<Film>>((filmId) => {
      return {
        queryKey: ["films", filmId],
        queryFn: () => FilmService.getFilmById(filmId),
        retry: false,
      };
    }),
  });
}
