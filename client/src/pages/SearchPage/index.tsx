import { useSearchParams } from "react-router-dom";
import { InfiniteFilmGrid } from "./components/InfiniteFilmGrid";
import { Suspense } from "@suspensive/react";
import styled from "styled-components";
import { Skeleton } from "@components/ui/Skeleton";
import { SkeletonFilmCard } from "@components/styled/FilmCard";
import { SearchDetails } from "./components/SearchDetails";
import { ResponsiveGrid } from "@layouts/ReponsiveGrid";


const InvalidSearchErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const InvalidSearchError = styled.h1`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  line-height: 1.3;
`;

const InvalidSearchValue = styled.p`
  color: ${(props) => props.theme.colors.lightWithOpacity(0.5)};
  line-height: 1.5;
`;

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q") ?? "";

  const isSearchValueValid = searchValue.trim() !== "";

  return (
    <>
      {isSearchValueValid && <SearchDetails searchValue={searchValue} />}
      <Suspense
        fallback={
          <ResponsiveGrid minWidth="250px" gap="35px">
            <Skeleton.List amount={10}>
              <SkeletonFilmCard />
            </Skeleton.List>
          </ResponsiveGrid>
        }
      >
        {isSearchValueValid ? (
          <InfiniteFilmGrid searchValue={searchValue} />
        ) : (
          <InvalidSearchErrorWrapper>
            <InvalidSearchError>Invalid search value</InvalidSearchError>
            <InvalidSearchValue>
              Please, enter correct film name because search value seems empty!
            </InvalidSearchValue>
          </InvalidSearchErrorWrapper>
        )}
      </Suspense>
    </>
  );
}
