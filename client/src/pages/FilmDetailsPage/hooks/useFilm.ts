import { QUERY_KEYS } from "@data/queryKeys";
import { FilmWithDetails } from "@schemas/filmSchema";
import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";

export function useFilm(id: FilmWithDetails["id"]) {
  return useQuery({
    queryKey: [QUERY_KEYS.film, id],
    queryFn: () => FilmService.getFilmById(id),
  });
}
