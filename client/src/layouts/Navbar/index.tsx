import { SearchContainer } from "@components/ui/SearchContainer";
import styled from "styled-components";
import { SearchInput } from "./components/SearchInput";
import { BurgerMenuToggler } from "./components/BurgerMenuToggler";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { media } from "@theme/mediaQueries";
import { NavbarMenu } from "./components/NavbarMenu";

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
`;

const SearchContainerStyled = styled(SearchContainer)`
  width: 100%;

  @media ${media.screens.sm} {
    width: auto;
    margin-left: auto;
  }
`;

type NavbarProps = {
  shouldRenderLinks?: boolean;
  shouldRenderLogo?: boolean;
};

export function Navbar({
  shouldRenderLinks = false,
  shouldRenderLogo = false,
  ...rest
}: NavbarProps) {
  const isMediumScreen = useMediaQuery((media) => media.screens.md);

  const shouldRenderNavbarMenu = isMediumScreen && shouldRenderLinks;

  return (
    <NavbarStyled {...rest}>
      {!isMediumScreen && <BurgerMenuToggler />}
      {shouldRenderNavbarMenu && (
        <NavbarMenu shouldRenderLogo={shouldRenderLogo} />
      )}
      <SearchContainerStyled>
        <SearchInput />
      </SearchContainerStyled>
    </NavbarStyled>
  );
}
