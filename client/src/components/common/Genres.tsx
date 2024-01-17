import { Badge } from "@components/ui/Badge";
import { media } from "@theme/mediaQueries";
import { Key } from "react";
import styled from "styled-components";

const GenresContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media ${media.screens.sm} {
    gap: 16px;
    overflow-x: hidden;
  }
`;

type GenresProps<T> = {
  genreLikeList: T[];
  getGenre: (genre: T) => string;
  getKey?: (genre: T) => Key;
};

export function Genres<T>({ genreLikeList, getGenre, getKey }: GenresProps<T>) {
  return (
    <GenresContainer>
      {genreLikeList.map((genreLikeItem, index) => (
        <Badge
          label={getGenre(genreLikeItem)}
          key={getKey?.(genreLikeItem) ?? index}
        />
      ))}
    </GenresContainer>
  );
}
