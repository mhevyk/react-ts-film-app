import { BadgeGroup } from "@components/styled/BadgeGroup";
import { Badge } from "@components/ui/Badge";
import { Skeleton } from "@components/ui/Skeleton";
import { useFilmGenres } from "@hooks/useFilmGenres";

type GenresProps = {
  genreIds: number[];
};

export function Genres({ genreIds = [] }: GenresProps) {
  const { data: genres = [], isLoading: areGenresLoading } = useFilmGenres();

  if (areGenresLoading) {
    return (
      <BadgeGroup>
        <Skeleton.List amount={3}>
          <Skeleton.Badge />
        </Skeleton.List>
      </BadgeGroup>
    );
  }

  return (
    <BadgeGroup>
      {genreIds.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);

        if (!genre) {
          return null;
        }

        return <Badge key={genre.id} label={genre.name} />;
      })}
    </BadgeGroup>
  );
}
