import { Skeleton } from "@components/ui/Skeleton";
import { StarRating } from "@components/ui/StarRating";
import { Film } from "@schemas/filmSchema";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BaseCard = styled.article`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px ${(props) => props.theme.colors.dark};
  border: 1px solid transparent;
  position: relative;
`;

const Card = styled(BaseCard)`
  transition: border-color 400ms;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.accent};

    img {
      scale: 1.05;
    }
  }
`;

const FilmImage = styled.img`
  aspect-ratio: 11/15;
  transition: scale 400ms;
`;

const FilmDetails = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 18px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
`;

const RatingContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const ReleaseDate = styled.time`
  display: inline-block;
  font-size: 14px;
  color: #666;
`;

type FilmCardProps = {
  film: Film;
};

export function FilmCard({ film }: FilmCardProps) {
  return (
    <Link to={`/films/${film.id}`}>
      <Card>
        <FilmImage
          src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
        />
        <RatingContainer>
          <StarRating rating={film.vote_average * 0.5} />
        </RatingContainer>
        <FilmDetails>
          <Title>{film.title}</Title>
          <ReleaseDate dateTime={film.release_date}>
            {film.release_date}
          </ReleaseDate>
        </FilmDetails>
      </Card>
    </Link>
  );
}

export function SkeletonFilmCard() {
  return (
    <BaseCard>
      <div style={{ aspectRatio: "11/15", background: "gray" }}></div>
      <RatingContainer>
        <Skeleton width={100} />
      </RatingContainer>
      <FilmDetails>
        <Skeleton height={18} />
        <Skeleton width={80} />
      </FilmDetails>
    </BaseCard>
  );
}
