import { ResponsiveGrid } from "@layouts/ReponsiveGrid";
import { useInfiniteFilmSearchQuery } from "../hooks/useInfiniteFilmSearchQuery";
import { FilmCard, SkeletonFilmCard } from "@components/styled/FilmCard";
import { Skeleton } from "@components/ui/Skeleton";
import { Film } from "@schemas/filmSchema";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { ReactNode, useCallback } from "react";

type QueryResult = UseInfiniteQueryResult<Film[]>;

type InfiniteFilmGridProps = {
  searchValue: string;
};

export function InfiniteFilmGrid({ searchValue }: InfiniteFilmGridProps) {
  const {
    data,
    isLoading,
    isFetchedAfterMount,
    isFetchingNextPage,
    isError,
    error,
    fetchNextPage,
  } = useInfiniteFilmSearchQuery(searchValue);

  let gridContentJSX: ReactNode;

  if (isError) {
    gridContentJSX = renderError(error);
  } else if (isLoading && !isFetchedAfterMount) {
    gridContentJSX = renderSkeleton();
  } else {
    gridContentJSX = renderCards({ data, fetchNextPage, isFetchingNextPage });
  }

  return (
    <ResponsiveGrid minWidth="250px" gap="35px">
      {gridContentJSX}
    </ResponsiveGrid>
  );
}

function renderError(error: NonNullable<QueryResult["error"]>) {
  return <p>Error: {error.message}</p>;
}

function renderSkeleton() {
  return (
    <Skeleton.List amount={10}>
      <SkeletonFilmCard />
    </Skeleton.List>
  );
}

function renderCards({
  data,
  fetchNextPage,
  isFetchingNextPage,
}: Pick<QueryResult, "data" | "fetchNextPage" | "isFetchingNextPage">) {
  return (
    <>
      <FilmsCardsList films={data} fetchNextPage={fetchNextPage} />
      {isFetchingNextPage && renderSkeleton()}
    </>
  );
}

function FilmsCardsList({
  films,
  fetchNextPage,
}: {
  films?: Film[];
  fetchNextPage: QueryResult["fetchNextPage"];
}) {
  // triggers fetchNextPage function to run if element with lastCardRef ref is in view
  const lastCardRef = useCallback((card: HTMLAnchorElement) => {
    if (!card) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchNextPage();
        observer.unobserve(card);
      }
    });

    observer.observe(card);
  }, []);

  if (!films || films.length === 0) {
    return <p>Not found</p>;
  }

  return films.map((film, index) => (
    <FilmCard
      key={film.id}
      film={film}
      ref={index === films.length - 1 ? lastCardRef : undefined}
    />
  ));
}
