import { Outlet } from "react-router-dom";
import { PageContentWrapper } from "@components/styled/PageContentWrapper";
import styled from "styled-components";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Navbar } from "./Navbar";
import { media } from "@theme/mediaQueries";
import theme from "@theme/theme";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 15;
  width: 100%;
  background-color: ${(props) => props.theme.colors.dark};

  @media ${media.screens.lg} {
    padding-left: ${(props) => props.theme.globals.contentContainerSpacing}px;
  }
`;

const NavbarStyled = styled(Navbar)`
  justify-content: space-around;
`;

export function StickyNavbarLayout() {
  const query = `(min-width: ${theme.breakpoints.md}px) and (max-width: ${theme.breakpoints.lg}px)`;
  const isBetweenMediumAndLargeScreen = useMediaQuery(query);

  return (
    <>
      <Header>
        <NavbarStyled
          shouldRenderLinks
          shouldRenderLogo={isBetweenMediumAndLargeScreen}
        />
      </Header>
      <PageContentWrapper>
        <Outlet />
      </PageContentWrapper>
    </>
  );
}
