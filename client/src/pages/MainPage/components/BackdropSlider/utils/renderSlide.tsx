import styled, { css } from "styled-components";
import { StarRating } from "@components/ui/StarRating";
import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";
import { media } from "@theme/mediaQueries";
import { LazyImageContainer } from "@components/ui/LazyImageContainer";
import { Film } from "@schemas/filmSchema";
import { BadgeGroup } from "@components/styled/BadgeGroup";
import { Badge } from "@components/ui/Badge";

const FilmTitle = styled.h2`
  font-size: 30px;
  line-height: 35px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  margin: 0;

  @media ${media.screens.lg} {
    font-size: 56px;
    line-height: 64px;
  }
`;

const FilmDescription = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
  max-height: 5em;
  overflow-y: auto;
  scrollbar-gutter: stable;
  padding-right: 16px;

  @media ${media.screens.sm} {
    font-size: 16px;
    line-height: 32px;
    max-height: 10em;
  }

  @media ${media.screens.lg} {
    max-width: 632px;
    padding-right: 0;
  }
`;

export function renderSlide(film: Film) {
  return (
    <>
      <BadgeGroup>
        {film.genres.map((genre) => (
          <Badge key={genre.id} label={genre.name} />
        ))}
      </BadgeGroup>
      <StarRating rating={film.vote_average * 0.5} />
      <FilmTitle>{film.title}</FilmTitle>
      <FilmDescription>{film.overview}</FilmDescription>
      <Button as={Link} to={`/films/${film.id}`} variant="gradient" outlined>
        Watch now
      </Button>

      {/* TODO: add src set to improve performance */}
      <LazyImageContainer
        src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
        imageWrapperStyles={css`
          position: absolute;
          inset: 0;
          z-index: -1;
        `}
        imageLoadedStyles={css`
          filter: brightness(40%);
        `}
      />
    </>
  );
}
