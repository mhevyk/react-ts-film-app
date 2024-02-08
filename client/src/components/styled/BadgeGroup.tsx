import { media } from "@theme/mediaQueries";
import styled from "styled-components";

export const BadgeGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media ${media.screens.sm} {
    gap: 16px;
    overflow-x: hidden;
  }
`;
