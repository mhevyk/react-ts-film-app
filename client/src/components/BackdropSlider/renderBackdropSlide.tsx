import styled, { css } from "styled-components";
import { slidesMock } from ".";
import { StarRating } from "@components/ui/StarRating";
import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";
import { media } from "@theme/mediaQueries";
import { LazyImageContainer } from "@components/ui/LazyImageContainer";
import { Genres } from "@components/common/Genres";

const Film = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;

  @media ${media.screens.xs} {
    padding: 0 12vw;
  }

  @media ${media.screens.md} {
    padding: 0
      calc(${(props) => props.theme.globals.contentContainerSpacing}px + 10%);
  }
`;

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

export function renderBackdropSlide(slide: (typeof slidesMock)[0]) {
  return (
    <>
      <Film>
        <Genres
          genreLikeList={slide.genres}
          getGenre={(genre) => genre.name}
          getKey={(genre) => genre.id}
        />
        <StarRating rating={slide.vote_average * 0.5} />
        <FilmTitle>{slide.title}</FilmTitle>
        <FilmDescription>{slide.overview}</FilmDescription>
        <Button as={Link} to="/" variant="gradient" outlined>
          {" "}
          {/* TODO: change link */}
          Watch now
        </Button>

        {/* TODO: add src set to improve performance */}
      </Film>
      <LazyImageContainer
        src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
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
