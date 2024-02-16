import { StarRating } from "@components/ui/StarRating";
import { Film } from "@schemas/filmSchema";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@components/styled/ChevronRightIcon";
import { Genres } from "./components/Genres";
import { ComponentPropsWithoutRef } from "react";
import { StyledPick } from "@type-helpers";
import { LazyImageContainer } from "@components/ui/LazyImageContainer";
import { BadgeGroup } from "../BadgeGroup";
import { Skeleton } from "@components/ui/Skeleton";

const ANIMATED_CONTAINER_CLASSNAME = "animated";
const WATCH_NOW_CONTAINER_CLASSNAME = "watch-now";

type CardProps = StyledPick<FilmPosterProps, "width" | "height">;

const Card = styled.div<CardProps>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  padding: 0 24px 24px;
  overflow: hidden;
`;

const SkeletonCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.lightWithOpacity(0.15)};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AnimatedContentContainer = styled(ContentContainer)`
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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const AnimationWrapper = styled(Wrapper)`
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
  width: number;
  height: number;
} & ComponentPropsWithoutRef<typeof AnimationWrapper>;

export function FilmPoster({ film, width, height, ...rest }: FilmPosterProps) {
  return (
    <Card $width={width} $height={height} {...rest}>
      <AnimationWrapper>
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
      </AnimationWrapper>
    </Card>
  );
}

export function SkeletonFilmPoster({
  width,
  height,
  ...rest
}: Omit<FilmPosterProps, "film" | "style">) {
  return (
    <SkeletonCard $width={width} $height={height} {...rest}>
      <AnimationWrapper>
        <ContentContainer>
          <BadgeGroup>
            <Skeleton.Badge />
            <Skeleton.Badge />
          </BadgeGroup>
          <Skeleton width={100} />
          <Skeleton.Heading />
        </ContentContainer>
      </AnimationWrapper>
    </SkeletonCard>
  );
}
