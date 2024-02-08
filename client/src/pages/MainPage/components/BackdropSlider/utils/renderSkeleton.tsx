import { BadgeGroup } from "@components/styled/BadgeGroup";
import { Skeleton } from "@components/ui/Skeleton";

export function renderSkeleton() {
  return (
    <>
      <BadgeGroup>
        <Skeleton.Badge />
        <Skeleton.Badge />
        <Skeleton.Badge />
      </BadgeGroup>
      <Skeleton width={100} />
      <Skeleton.Heading />
      <Skeleton.Paragraph lines={5} />
      <Skeleton.Button />
    </>
  );
}
