import { QUERY_KEYS } from "@data/queryKeys";
import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";

type UseUpcomingFilms = {
  page?: number;
};

export function useUpcomingFilms({ page = 1 }: UseUpcomingFilms = {}) {
  return useQuery({
    queryKey: [QUERY_KEYS.film, QUERY_KEYS.upcoming],
    queryFn: () => FilmService.getUpcoming(page),
    select: (data) => data.results,
  });
}
