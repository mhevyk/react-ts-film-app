import { QUERY_KEYS } from "@data/queryKeys";
import { Film } from "@schemas/filmSchema";
import FilmService from "@services/FilmService";
import { useSuspenseInfiniteQuery } from "@suspensive/react-query";

export function useInfiniteFilmSearchQuery(searchValue: string) {
  return useSuspenseInfiniteQuery({
    queryKey: [QUERY_KEYS.film, QUERY_KEYS.search, { searchValue }],
    queryFn: async ({ pageParam }) =>
      FilmService.searchFilm(searchValue, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) {
        return undefined;
      }

      return lastPage.page + 1;
    },
    /* FIXME: */
    /*  @ts-expect-error */
    select: (data) => {
      const films = data.pages.reduce<Film[]>(
        (acc, page) => acc.concat(page.results),
        []
      );
      return { films, totalResults: data.pages[0].total_results };
    },
  });
}
