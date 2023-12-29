import { Badge } from "@components/ui/Badge";
import styled from "styled-components";
import { slidesMock } from ".";
import { StarRating } from "@components/ui/StarRating";
import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";
import { media } from "@theme/mediaQueries";
import { LazyImage } from "@components/ui/LazyImage";

const Film = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20vw;

  @media ${media.screens.xs} {
    padding: 0 12vw;
  }

  @media ${media.screens.md} {
    padding: 0 12%;
  }
`;

const FilmGenres = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${media.screens.sm} {
    flex-direction: row;
  }
`;

const FilmTitle = styled.h2`
  font-size: 30px;
  line-height: 35px;
  font-weight: 500;
  color: white;
  margin: 0;

  @media ${media.screens.lg} {
    font-size: 56px;
    line-height: 64px;
  }
`;

const FilmDescription = styled.p`
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
  max-height: 10em;
  overflow-y: scroll;
  padding-right: 16px;

  @media ${media.screens.sm} {
    font-size: 16px;
    line-height: 32px;
    overflow-y: unset;
    max-height: unset;
  }

  @media ${media.screens.lg} {
    max-width: 632px;
    padding-right: 0;
  }
`;

const Poster = styled(LazyImage)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: brightness(40%);
  object-fit: cover;
  z-index: -1;
`;

export function renderBackdropSlide(slide: (typeof slidesMock)[0]) {
  return (
    <Film>
      <FilmGenres>
        {slide.genres.map((genre) => (
          <Badge label={genre.name} key={genre.id} />
        ))}
      </FilmGenres>
      <StarRating rating={slide.vote_average * 0.5} />
      <FilmTitle>{slide.title}</FilmTitle>
      <FilmDescription>{slide.overview}</FilmDescription>
      <Button variant="gradient" outlined as={Link} to="/">
        {" "}
        {/* TODO: change link */}
        Watch now
      </Button>
      <Poster
        src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
      />{" "}
      {/* TODO: add src set to improve performance */}
    </Film>
  );
}
