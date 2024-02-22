import { QUERY_KEYS } from "@data/queryKeys";
import FilmService from "@services/FilmService";
import { useSuspenseQuery } from "@suspensive/react-query";

type UsePopularFilms = {
  page?: number;
};

export function usePopularFilms({ page = 1 }: UsePopularFilms = {}) {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.film, QUERY_KEYS.popular],
    queryFn: () => FilmService.getPopular(page),
    select: (data) => data.results,
    retry: false,
  });
}
