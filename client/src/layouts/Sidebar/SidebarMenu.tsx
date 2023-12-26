import { Link } from "react-router-dom";
import logoImage from "@icons/logo.svg";
import styled from "styled-components";
import { sidebarMenuItems } from "./sidebarMenuItems";
import { Menu } from "@layouts/components/Menu";

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-top: 40px;
`;

export function SidebarMenu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <img src={logoImage} alt="Logo" loading="lazy" />
      </Link>
      <Menu items={sidebarMenuItems} direction="column" gap={80} />
    </MenuWrapper>
  );
}
