import { Link } from "react-router-dom";
import logoImage from "@icons/logo.svg";
import styled from "styled-components";
import { sidebarMenuItems } from "./sidebarMenuItems";
import { cloneElement } from "react";

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-top: 40px;
`;

const ImageWrapper = styled.div`
  width: 19.2px;
  aspect-ratio: 1/1;
  padding: 8px;
  border-radius: 50%;
  transition: all 200ms;

  &:hover {
    scale: 1.12;
    background-color: rgba(
      255,
      255,
      255,
      0.2
    ); // TODO: replace with theme color
  }
`;

const MenuItemStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export function SidebarMenu() {
  return (
    <Menu>
      <Link to="/">
        <img src={logoImage} alt="Logo" loading="lazy" />
      </Link>
      <MenuItemStack>
        {sidebarMenuItems.map((menuItem, index) => (
          <Link key={index} to={menuItem.path}>
            <ImageWrapper>
              {cloneElement(menuItem.icon, { loading: "lazy" })}
            </ImageWrapper>
          </Link>
        ))}
      </MenuItemStack>
    </Menu>
  );
}
