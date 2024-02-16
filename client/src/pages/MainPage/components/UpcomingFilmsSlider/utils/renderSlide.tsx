import { BadgeGroup } from "@components/styled/BadgeGroup";
import { Badge } from "@components/ui/Badge";
import { Skeleton } from "@components/ui/Skeleton";
import { StarRating } from "@components/ui/StarRating";
import { useFilmGenres } from "@hooks/useFilmGenres";
import { UpcomingFilm } from "@schemas/filmSchema";
import { repeatComponent } from "@utils/repeatComponent";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { LazyImageContainer } from "@components/ui/LazyImageContainer";
import { ChevronRightIcon } from "@components/styled/ChevronRightIcon";

const ANIMATED_CONTAINER_CLASSNAME = "animated";
const WATCH_NOW_CONTAINER_CLASSNAME = "watch-now";

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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transform: translateY(25px);
  margin-bottom: 0;
  transition: all 500ms;
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

function Genres({ genresIds }: { genresIds: number[] }) {
  const { data: genres = [], isLoading: areGenresLoading } = useFilmGenres();

  let content: ReactNode;

  if (areGenresLoading) {
    content = repeatComponent(<Skeleton.Badge />, 3);
  } else if (genres) {
    content = genresIds.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);

      if (!genre) {
        return null;
      }

      return <Badge key={genre.id} label={genre.name} />;
    });
  }

  return <BadgeGroup>{content}</BadgeGroup>;
}

const AnimationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

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

export function renderSlide(slide: UpcomingFilm) {
  return (
    <AnimationWrapper>
      <ContentContainer className={ANIMATED_CONTAINER_CLASSNAME}>
        <Genres genresIds={slide.genre_ids} />
        <StarRating rating={slide.vote_average * 0.5} />
        <CardTitle>{slide.title}</CardTitle>
      </ContentContainer>
      <ViewDetailsContainer
        to={`/films/${slide.id}`}
        className={WATCH_NOW_CONTAINER_CLASSNAME}
      >
        <ViewDetailsText>View Details</ViewDetailsText>
        <ChevronRightIcon size={22} />
      </ViewDetailsContainer>
      <LazyImageContainer
        src={`https://image.tmdb.org/t/p/original${slide.poster_path}`}
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
  );
}
