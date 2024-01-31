import { Skeleton } from "@components/ui/Skeleton";
import styled from "styled-components";

const BadgeGroup = styled.div`
  display: flex;
  gap: 20px;
`;

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
