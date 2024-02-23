import { Image } from "@components/ui/Image";
import { OverflowText } from "@components/ui/OverflowText";
import { Skeleton } from "@components/ui/Skeleton";
import { StarRating } from "@components/ui/StarRating";
import { Film } from "@schemas/filmSchema";
import { ElementRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.article`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px ${(props) => props.theme.colors.dark};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  outline: 3px solid transparent;
  transition: outline-color 400ms;

  &:hover {
    outline-color: ${(props) => props.theme.colors.accent};
  }
`;

const RatingContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const FilmDetails = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled(OverflowText)`
  font-size: 18px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
`;

const ReleaseDate = styled.time`
  display: inline-block;
  font-size: 14px;
  color: #666;
`;

type FilmCardProps = {
  film: Film;
};

export const FilmCard = forwardRef<ElementRef<typeof Link>, FilmCardProps>(
  ({ film }, ref) => {
    return (
      <Link to={`/films/${film.id}`} ref={ref}>
        <Card>
          <RatingContainer>
            <StarRating rating={film.vote_average * 0.5} />
          </RatingContainer>
          <Image
            src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}
            aspectRatio="11/14"
          />
          <FilmDetails>
            <Title lines={2} forwardedAs="h3">
              {film.title}
            </Title>
            <ReleaseDate dateTime={film.release_date}>
              {film.release_date}
            </ReleaseDate>
          </FilmDetails>
        </Card>
      </Link>
    );
  }
);

const SkeletonImage = styled.div`
  aspect-ratio: 11 / 14;
  background-color: ${(props) => props.theme.colors.lightWithOpacity(0.5)};
`;

export function SkeletonFilmCard() {
  return (
    <Card>
      <RatingContainer>
        <Skeleton width={80} />
      </RatingContainer>
      <SkeletonImage />
      <FilmDetails>
        <Skeleton height={18} />
        <Skeleton width={100} />
      </FilmDetails>
    </Card>
  );
}
