import { Genres } from "@components/common/Genres";
import { StarRating } from "@components/ui/StarRating";
import { NewReleaseFilm } from "@schemas/filmSchema";
import { FilmGenre } from "@schemas/genreSchema";
import styled from "styled-components";

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

export function renderSlide(slide: NewReleaseFilm, genres: FilmGenre[]) {
  return (
    <>
      <Genres
        genreLikeList={slide.genre_ids}
        getGenre={(genreId) => {
          return genres?.find((genre) => genre.id === genreId)?.name;
        }}
        getKey={(genreId) => genreId}
      />
      <StarRating rating={slide.vote_average * 0.5} />
      <CardTitle>{slide.title}</CardTitle>
    </>
  );
}
