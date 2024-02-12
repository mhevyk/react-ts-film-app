import { media } from "@theme/mediaQueries";
import styled from "styled-components";

export const PageContentWrapper = styled.div`
  position: relative;
  z-index: 5;
  background-color: ${(props) => props.theme.colors.background};
  padding: 0 20px;

  @media ${media.screens.md} {
    padding: 0 ${(props) => props.theme.globals.contentContainerSpacing}px;
  }
`;
