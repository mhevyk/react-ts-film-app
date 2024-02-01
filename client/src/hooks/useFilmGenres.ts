import { QUERY_KEYS } from "@data/queryKeys";
import GenreService from "@services/GenreService";
import { useQuery } from "@tanstack/react-query";

export function useFilmGenres() {
  return useQuery({
    queryKey: [QUERY_KEYS.genres, QUERY_KEYS.film],
    queryFn: GenreService.getFilmGenres,
  });
}
