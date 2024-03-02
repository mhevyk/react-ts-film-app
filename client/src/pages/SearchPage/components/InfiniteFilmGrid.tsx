import { useInfiniteFilmSearchQuery } from "../hooks/useInfiniteFilmSearchQuery";
import { FilmCard } from "@components/styled/FilmCard";
import { Film } from "@schemas/filmSchema";
import { useCallback } from "react";
import { InfiniteFilmGridLoadingFallback } from "./InfiniteFilmGridLoadingFallback";
import { UseSuspenseInfiniteQueryResultOnSuccess } from "@suspensive/react-query";
import { ResponsiveGrid } from "@layouts/ReponsiveGrid";
import styled from "styled-components";
import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";

const FilmsNotFound = styled.p`
  color: ${(props) => props.theme.colors.lightWithOpacity(0.5)};
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

type QueryResult = UseSuspenseInfiniteQueryResultOnSuccess<Film[]>;

type InfiniteFilmGridProps = {
  searchValue: string;
};

export function InfiniteFilmGrid({ searchValue }: InfiniteFilmGridProps) {
  const { data, isFetchingNextPage, fetchNextPage } =
    useInfiniteFilmSearchQuery(searchValue);

  /* FIXME: */
  /*  @ts-expect-error */
  const { films, totalResults } = data;

  if (totalResults === 0) {
    return (
      <FilmsNotFound>
        Sorry, but no films were found based on your query!
        <Button variant="primary" outlined as={Link} to="/discover">
          Configurable Search
        </Button>
      </FilmsNotFound>
    );
  }

  return (
    <>
      <ResponsiveGrid minWidth="250px" gap="35px">
        {/* FIXME: */}
        {/*  @ts-expect-error */}
        <FilmsCardsList films={films} fetchNextPage={fetchNextPage} />
        {isFetchingNextPage && <InfiniteFilmGridLoadingFallback />}
      </ResponsiveGrid>
    </>
  );
}

function FilmsCardsList({
  films,
  fetchNextPage,
}: {
  films: Film[];
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

  return films.map((film, index) => (
    <FilmCard
      key={film.id}
      film={film}
      ref={index === films.length - 1 ? lastCardRef : undefined}
    />
  ));
}
