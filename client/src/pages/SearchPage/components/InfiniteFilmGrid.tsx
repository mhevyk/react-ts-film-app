import { useInfiniteFilmSearchQuery } from "../hooks/useInfiniteFilmSearchQuery";
import { FilmCard } from "@components/styled/FilmCard";
import { Film } from "@schemas/filmSchema";
import { useCallback } from "react";
import { InfiniteFilmGridLoadingFallback } from "./InfiniteFilmGridLoadingFallback";
import { UseSuspenseInfiniteQueryResultOnSuccess } from "@suspensive/react-query";

type QueryResult = UseSuspenseInfiniteQueryResultOnSuccess<Film[]>;

type InfiniteFilmGridProps = {
  searchValue: string;
};

export function InfiniteFilmGrid({ searchValue }: InfiniteFilmGridProps) {
  const { data, isFetchingNextPage, fetchNextPage } =
    useInfiniteFilmSearchQuery(searchValue);

  return (
    <>
      {/* FIXME: */}
      {/*  @ts-expect-error */}
      <FilmsCardsList films={data} fetchNextPage={fetchNextPage} />
      {isFetchingNextPage && <InfiniteFilmGridLoadingFallback />}
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
