import styled, { css } from "styled-components";
import { sidebarMenuItems } from "./sidebarMenuItems";
import { Logo } from "../../components/ui/Logo";
import { Menu } from "@components/ui/Menu";
import { HoverableIcon } from "@components/ui/HoverableIcon";
import { cloneElement } from "react";

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-top: 40px;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  span {
    color: ${(props) => props.theme.colors.white};
  }
`;

type SidebarMenuProps = {
  isLargeScreen: boolean;
};

export function SidebarMenu({ isLargeScreen }: SidebarMenuProps) {
  return (
    <MenuWrapper>
      {isLargeScreen && <Logo />}
      <Menu
        items={sidebarMenuItems}
        renderItem={(item) => (
          <MenuItem>
            <HoverableIcon
              icon={cloneElement(item.icon, { loading: "lazy" })}
              size={19.2}
            />
            {!isLargeScreen && <span>{item.label}</span>}
          </MenuItem>
        )}
        direction="column"
        wrapperStyles={css`
          gap: ${isLargeScreen ? 80 : 35}px;
        `}
      />
    </MenuWrapper>
  );
}
