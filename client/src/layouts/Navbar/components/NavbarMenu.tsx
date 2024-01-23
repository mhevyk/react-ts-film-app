import { navbarMenuItems } from "../data/navbarMenuItems";
import styled, { css } from "styled-components";
import { media } from "@theme/mediaQueries";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useSidebarStore } from "@store/sidebarStore";
import { Menu } from "@components/ui/Menu";
import { IconButton } from "@components/ui/IconButton";
import burgerMenuIcon from "@icons/menu.svg";

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 5vw;

  @media ${media.screens.lg} {
    justify-content: flex-end;
    padding: 24px 64px;
  }
`;

export function NavbarMenu() {
  const matches = useMediaQuery(media.screens.lg);
  const setIsSidebarOpen = useSidebarStore((store) => store.setIsOpen);

  return (
    <MenuWrapper>
      {!matches && (
        <IconButton
          icon={<img src={burgerMenuIcon} alt="Burger menu icon" />}
          onClick={() => setIsSidebarOpen(true)}
        />
      )}
      <Menu
        items={navbarMenuItems}
        renderItem={(item) => <IconButton icon={item.icon} size={24} />}
        wrapperStyles={css`
          gap: 30px;
        `}
      />
    </MenuWrapper>
  );
}
