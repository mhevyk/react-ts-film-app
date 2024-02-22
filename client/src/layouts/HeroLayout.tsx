import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { PageContentWrapper } from "@layouts/PageContentWrapper";
import { Navbar } from "./Navbar";

const ParallaxHeader = styled.header`
  position: sticky;
  top: 0;
`;

const NavbarStyled = styled(Navbar)`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`;

type HeroLayoutProps = {
  HeroComponent: ReactNode;
};

export function HeroLayout({ HeroComponent }: HeroLayoutProps) {
  return (
    <>
      <ParallaxHeader>
        <NavbarStyled />
        {HeroComponent}
      </ParallaxHeader>
      <PageContentWrapper>
        <Outlet />
      </PageContentWrapper>
    </>
  );
}
