import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { media } from "@theme/mediaQueries";
import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  z-index: 5;
  background-color: ${(props) => props.theme.colors.background};

  @media ${media.screens.md} {
    padding: 0 ${(props) => props.theme.globals.contentContainerSpacing}px;
  }
`;

export function StickyNavbarLayout() {
  return (
    <>
      <Navbar variant="sticky" />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </>
  );
}
