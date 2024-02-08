import { BadgeGroup } from "@components/styled/BadgeGroup";
import { Skeleton } from "@components/ui/Skeleton";

export const SKELETON_SLIDES = Array.from({ length: 10 }, (_, index) => index);

export function renderSkeleton() {
  return (
    <>
      <BadgeGroup>
        <Skeleton.Badge />
        <Skeleton.Badge />
      </BadgeGroup>
      <Skeleton width={100} />
      <Skeleton.Heading />
    </>
  );
}
