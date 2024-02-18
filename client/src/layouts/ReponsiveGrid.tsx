import { StyledPick } from "@type-helpers";
import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type GridProps = StyledPick<ResponsiveGridProps, "gap" | "minWidth">;

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.$minWidth}, 100%), 1fr)
  );
  gap: ${(props) => props.$gap};
`;

type ResponsiveGridProps = {
  minWidth?: string;
  gap?: string;
} & ComponentPropsWithoutRef<"div">;

export function ResponsiveGrid({
  minWidth = "220px",
  gap = "35px",
  ...rest
}: ResponsiveGridProps) {
  return <Grid $minWidth={minWidth} $gap={gap} {...rest} />;
}
