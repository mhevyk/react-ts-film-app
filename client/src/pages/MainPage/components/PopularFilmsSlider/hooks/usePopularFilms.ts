import { QUERY_KEYS } from "@data/queryKeys";
import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";

type UsePopularFilms = {
  page?: number;
};

export function usePopularFilms({ page = 1 }: UsePopularFilms = {}) {
  return useQuery({
    queryKey: [QUERY_KEYS.film, QUERY_KEYS.popular],
    queryFn: () => FilmService.getPopular(page),
    select: (data) => data.results,
  });
}
