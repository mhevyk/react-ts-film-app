import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { PageContentWrapper } from "@components/styled/PageContentWrapper";
import { BurgerMenuToggler } from "./Navbar/components/BurgerMenuToggler";
import { SearchInput } from "./Navbar/components/SearchInput";
import { SearchContainer } from "@components/ui/SearchContainer";

const ParallaxHeader = styled.header`
  position: sticky;
  top: 0;
`;

const Navbar = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 20px;
  display: flex;
  gap: 20px;
`;

const Search = styled(SearchContainer)`
  margin-left: auto;
`;

type HeroLayoutProps = {
  HeroComponent: ReactNode;
};

export function HeroLayout({ HeroComponent }: HeroLayoutProps) {
  return (
    <>
      <ParallaxHeader>
        <Navbar>
          <BurgerMenuToggler />
          <Search>
            <SearchInput />
          </Search>
        </Navbar>
        {HeroComponent}
      </ParallaxHeader>
      <PageContentWrapper>
        <Outlet />
      </PageContentWrapper>
    </>
  );
}
