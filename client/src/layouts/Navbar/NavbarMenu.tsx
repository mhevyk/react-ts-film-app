import { Menu } from "@layouts/components/Menu";
import { navbarMenuItems } from "./navbarMenuItems";
import styled from "styled-components";
import { media } from "@theme/mediaQueries";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Logo } from "@components/ui/Logo";
import { useSidebarStore } from "@store/sidebarStore";

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
  const toggle = useSidebarStore((store) => store.toggle);

  return (
    <MenuWrapper>
      {!matches && <Logo onClick={() => toggle()} />}
      <Menu items={navbarMenuItems} gap={30} iconSize={24} />
    </MenuWrapper>
  );
}
