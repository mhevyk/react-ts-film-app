import { QUERY_KEYS } from "@data/queryKeys";
import { SimpleFilm } from "@schemas/filmSchema";
import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";

export function useFilm(id: SimpleFilm["id"]) {
  return useQuery({
    queryKey: [QUERY_KEYS.film, id],
    queryFn: () => FilmService.getFilmById(id),
  });
}
