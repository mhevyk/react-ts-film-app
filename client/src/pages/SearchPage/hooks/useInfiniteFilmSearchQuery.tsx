import { QUERY_KEYS } from "@data/queryKeys";
import { Film } from "@schemas/filmSchema";
import FilmService from "@services/FilmService";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteFilmSearchQuery(searchValue: string) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.film, QUERY_KEYS.search, { searchValue }],
    queryFn: ({ pageParam }) => FilmService.searchFilm(searchValue, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) {
        return undefined;
      }

      return lastPage.page + 1;
    },
    select: (data) => {
      return data.pages.reduce<Film[]>(
        (acc, page) => acc.concat(page.results),
        []
      );
    },
  });
}
