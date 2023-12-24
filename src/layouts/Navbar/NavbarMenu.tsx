import { Menu } from "@layouts/components/Menu";
import { navbarMenuItems } from "./navbarMenuItems";
import styled from "styled-components";

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 24px 64px;
`;

export function NavbarMenu() {
  return (
    <MenuWrapper>
      <Menu items={navbarMenuItems} gap={30} iconSize={24} />
    </MenuWrapper>
  );
}
