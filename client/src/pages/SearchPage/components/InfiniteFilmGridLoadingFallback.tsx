import { SkeletonFilmCard } from "@components/styled/FilmCard";
import { Skeleton } from "@components/ui/Skeleton";

export function InfiniteFilmGridLoadingFallback() {
  return (
    <Skeleton.List amount={10}>
      <SkeletonFilmCard />
    </Skeleton.List>
  );
}
