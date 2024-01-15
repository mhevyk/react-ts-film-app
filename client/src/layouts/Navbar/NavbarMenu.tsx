import { navbarMenuItems } from "./navbarMenuItems";
import styled, { css } from "styled-components";
import { media } from "@theme/mediaQueries";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Logo } from "@components/ui/Logo";
import { useSidebarStore } from "@store/sidebarStore";
import { Menu } from "@components/ui/Menu";
import { HoverableIcon } from "@components/ui/HoverableIcon";
import { cloneElement } from "react";

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
      {!matches && <Logo onClick={() => setIsSidebarOpen(true)} />}
      <Menu
        items={navbarMenuItems}
        renderItem={(item) => (
          <HoverableIcon
            icon={cloneElement(item.icon, { loading: "lazy" })}
            size={24}
          />
        )}
        wrapperStyles={css`
          gap: 30px;
        `}
      />
    </MenuWrapper>
  );
}
