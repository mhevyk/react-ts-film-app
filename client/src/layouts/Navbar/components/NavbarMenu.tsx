import { navbarMenuItems } from "../data/navbarMenuItems";
import styled, { css } from "styled-components";
import { media } from "@theme/mediaQueries";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Menu } from "@components/ui/Menu";
import { IconButton } from "@components/ui/IconButton";
import burgerMenuIcon from "@icons/menu.svg";
import { useState } from "react";
import { SmallScreenSidebar } from "@layouts/Navbar/components/SmallScreenSidebar";

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
  const isLargeScreen = useMediaQuery((media) => media.screens.lg);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <MenuWrapper>
      {!isLargeScreen && (
        <IconButton
          icon={<img src={burgerMenuIcon} alt="Burger menu icon" />}
          onClick={() => setIsMobileSidebarOpen(true)}
        />
      )}
      <Menu
        items={navbarMenuItems}
        renderItem={(item) => <IconButton icon={item.icon} size={24} />}
        wrapperStyles={css`
          gap: 30px;
        `}
      />
      <SmallScreenSidebar
        isOpen={isMobileSidebarOpen}
        handleClose={() => setIsMobileSidebarOpen(false)}
      />
    </MenuWrapper>
  );
}
