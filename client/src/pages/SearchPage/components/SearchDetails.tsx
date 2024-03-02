import { Skeleton } from "@components/ui/Skeleton";
import { Suspense } from "@suspensive/react";
import styled from "styled-components";
import { useInfiniteFilmSearchQuery } from "../hooks/useInfiniteFilmSearchQuery";

const Title = styled.h1`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  line-height: 1.3;
`;

const SearchValue = styled.span`
  word-break: break-word;
  color: ${(props) => props.theme.colors.accent};
`;

const TotalResults = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

const TotalResultsAmount = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.lightWithOpacity(0.1)};
  padding-bottom: 16px;
  margin-bottom: 32px;
`;

export function SearchDetails({ searchValue }: { searchValue: string }) {
  return (
    <DetailsWrapper>
      <Title>
        Searched: <SearchValue>{searchValue}</SearchValue>
      </Title>
      <TotalResults>
        <TotalResultsAmount>
          <Suspense fallback={<Skeleton width={35} inline />}>
            <TotalResultsValue searchValue={searchValue} />
          </Suspense>
        </TotalResultsAmount>{" "}
        total result(s) found
      </TotalResults>
    </DetailsWrapper>
  );
}

function TotalResultsValue({ searchValue }: { searchValue: string }) {
  const { data } = useInfiniteFilmSearchQuery(searchValue);

  /* FIXME: */
  /*  @ts-expect-error */
  return data.totalResults;
}
