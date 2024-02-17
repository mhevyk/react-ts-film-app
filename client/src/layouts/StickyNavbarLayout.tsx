import { Outlet, useNavigate } from "react-router-dom";
import { PageContentWrapper } from "@components/styled/PageContentWrapper";
import styled from "styled-components";
import { Logo } from "@components/ui/Logo";
import { NavLink } from "@components/styled/NavLink";
import { BurgerMenuToggler } from "./Navbar/components/BurgerMenuToggler";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { mainMenuItems } from "@data/mainMenuItems";
import { SearchInput } from "./Navbar/components/SearchInput";
import { media } from "@theme/mediaQueries";
import { Menu } from "@components/ui/Menu";
import { SearchContainer } from "@components/ui/SearchContainer";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.dark};

  @media ${media.screens.lg} {
    justify-content: flex-end;
  }
`;

const Search = styled(SearchContainer)`
  width: 100%;

  @media ${media.screens.sm} {
    width: auto;
  }
`;

export function StickyNavbarLayout() {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery((media) => media.screens.lg);
  const isSmallScreen = useMediaQuery((media) => media.screens.sm);

  return (
    <>
      <Header>
        {isSmallScreen && !isLargeScreen ? (
          <>
            <Logo size={45} onClick={() => navigate("/")} />
            <Menu
              items={mainMenuItems}
              renderItem={(item) => (
                <NavLink to={item.path}>{item.label}</NavLink>
              )}
              getKey={(item) => item.label}
              listStyle={{ gap: 40 }}
            />
          </>
        ) : (
          <BurgerMenuToggler />
        )}

        <Search>
          <SearchInput />
        </Search>
      </Header>
      <PageContentWrapper>
        <Outlet />
      </PageContentWrapper>
    </>
  );
}
