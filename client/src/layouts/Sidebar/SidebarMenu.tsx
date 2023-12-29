import styled from "styled-components";
import { sidebarMenuItems } from "./sidebarMenuItems";
import { Menu } from "@layouts/components/Menu";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { media } from "@theme/mediaQueries";
import { Logo } from "./Logo";

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-top: 40px;
`;

export function SidebarMenu() {
  const matches = useMediaQuery(media.screens.md);

  return (
    matches && (
      <MenuWrapper>
        <Logo />
        <Menu items={sidebarMenuItems} direction="column" gap={80} />
      </MenuWrapper>
    )
  );
}
