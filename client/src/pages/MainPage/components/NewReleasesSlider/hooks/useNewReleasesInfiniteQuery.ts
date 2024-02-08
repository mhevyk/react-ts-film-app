import { QUERY_KEYS } from "@data/queryKeys";
import { NewReleaseFilm } from "@schemas/filmSchema";
import FilmService from "@services/FilmService";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useNewReleasesInfiniteQuery() {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.newReleases],
    queryFn: ({ pageParam }) => FilmService.getNewReleases(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) {
        return undefined;
      }

      return lastPage.page + 1;
    },
    select: (data) => {
      return data.pages.reduce<NewReleaseFilm[]>(
        (acc, page) => acc.concat(page.results),
        []
      );
    },
  });
}
