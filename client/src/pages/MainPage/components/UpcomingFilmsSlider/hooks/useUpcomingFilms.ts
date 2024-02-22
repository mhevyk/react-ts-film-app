import { QUERY_KEYS } from "@data/queryKeys";
import FilmService from "@services/FilmService";
import { useSuspenseQuery } from "@suspensive/react-query";

type UseUpcomingFilms = {
  page?: number;
};

export function useUpcomingFilms({ page = 1 }: UseUpcomingFilms = {}) {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.film, QUERY_KEYS.upcoming],
    queryFn: () => FilmService.getUpcoming(page),
    select: (data) => data.results,
  });
}
