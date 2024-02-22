import { StarRating } from "@components/ui/StarRating";
import { Film } from "@schemas/filmSchema";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@components/styled/ChevronRightIcon";
import { Genres } from "./components/Genres";
import { LazyImageContainer } from "@components/ui/LazyImageContainer";
import { BadgeGroup } from "../BadgeGroup";
import { Skeleton } from "@components/ui/Skeleton";

const ANIMATED_CONTAINER_CLASSNAME = "animated";
const WATCH_NOW_CONTAINER_CLASSNAME = "watch-now";

const Card = styled.article`
  width: 100%;
  height: 100%;
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const contentContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.lightWithOpacity(0.15)};
  ${contentContainerCss};
`;

const AnimatedContentContainer = styled.div`
  ${contentContainerCss};
  transform: translateY(25px);
  margin-bottom: 0;
  transition: all 500ms;
`;

const ViewDetailsContainer = styled(Link)`
  display: flex;
  width: fit-content;
  opacity: 0;
  transition: opacity 500ms;
`;

const ViewDetailsText = styled.span`
  line-height: 24px;
  color: ${(props) => props.theme.colors.white};
`;

const CardTitle = styled.h5`
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.white};

  // showing limited number of lines if title is very large
  --shown-lines-count: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--shown-lines-count);
  line-clamp: var(--shown-lines-count);
  overflow: hidden;
`;

const AnimatedCard = styled(Card)`
  img {
    scale: 1;
    transition: scale 500ms;
  }

  &:hover {
    .${WATCH_NOW_CONTAINER_CLASSNAME} {
      opacity: 1;
    }

    .${ANIMATED_CONTAINER_CLASSNAME} {
      transform: translateY(0);
      margin-bottom: 16px;
    }

    img {
      scale: 1.05;
    }
  }
`;

type FilmPosterProps = {
  film: Film;
};

export function FilmPoster({ film }: FilmPosterProps) {
  return (
    <AnimatedCard>
      <AnimatedContentContainer className={ANIMATED_CONTAINER_CLASSNAME}>
        <Genres genreIds={film.genre_ids} />
        <StarRating rating={film.vote_average * 0.5} />
        <CardTitle>{film.title}</CardTitle>
      </AnimatedContentContainer>
      <ViewDetailsContainer
        to={`/films/${film.id}`}
        className={WATCH_NOW_CONTAINER_CLASSNAME}
      >
        <ViewDetailsText>View Details</ViewDetailsText>
        <ChevronRightIcon size={22} />
      </ViewDetailsContainer>
      <LazyImageContainer
        src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
        imageWrapperStyles={css`
          position: absolute;
          inset: 0;
          z-index: -1;
        `}
        imageLoadedStyles={css`
          filter: brightness(40%);
        `}
      />
    </AnimatedCard>
  );
}

export function SkeletonFilmPoster() {
  return (
    <SkeletonCard>
      <BadgeGroup>
        <Skeleton.Badge />
        <Skeleton.Badge />
      </BadgeGroup>
      <Skeleton width={100} />
      <Skeleton.Heading />
    </SkeletonCard>
  );
}
