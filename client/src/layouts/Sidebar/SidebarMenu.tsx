import styled from "styled-components";
import { sidebarMenuItems } from "./sidebarMenuItems";
import { Menu } from "@layouts/components/Menu";
import { Logo } from "../../components/ui/Logo";

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-top: 40px;
`;

type SidebarMenuProps = {
  isLargeScreen: boolean;
};

export function SidebarMenu({ isLargeScreen }: SidebarMenuProps) {
  return (
    <MenuWrapper>
      {isLargeScreen && <Logo />}
      {isLargeScreen && (
        <Menu items={sidebarMenuItems} direction="column" gap={80} />
      )}{" "}
      {/* TODO: handle styling of menus */}
    </MenuWrapper>
  );
}
