import { Badge } from "@components/ui/Badge";
import styled from "styled-components";
import { slidesMock } from ".";
import { StarRating } from "@components/ui/StarRating";
import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";
import { media } from "@theme/mediaQueries";

const Film = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20vw;

  ${media.screens.xs} {
    padding: 0 12vw;
  }

  ${media.screens.md} {
    padding: 0 12%;
  }
`;

const FilmGenres = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.screens.sm} {
    flex-direction: row;
  }
`;

const FilmTitle = styled.h2`
  font-size: 30px;
  line-height: 35px;
  font-weight: 500;
  color: white;
  margin: 0;

  ${media.screens.lg} {
    font-size: 56px;
    line-height: 64px;
  }
`;

const FilmDescription = styled.p`
  color: white;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: justify;
  max-height: 10em;
  overflow-y: scroll;

  ${media.screens.sm} {
    font-size: 16px;
    line-height: 32px;
  }

  ${media.screens.lg} {
    max-width: 632px;
    max-height: unset;
    overflow-y: unset;
  }
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
    </Film>
  );
}
