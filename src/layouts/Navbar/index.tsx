import styled from "styled-components";
import { NavbarMenu } from "./NavbarMenu";
import { ROOT_CONTAINER_SPACING } from "@layouts/RootLayout";

type NavbarContainerProps = {
  $spacing: number;
};

const NavbarContainer = styled.div<NavbarContainerProps>`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: red; // TODO: change to theme colors
  height: ${(props) => props.$spacing}px;
  margin-left: ${(props) => props.$spacing}px;
`;

export function Navbar() {
  return (
    <NavbarContainer $spacing={ROOT_CONTAINER_SPACING}>
      <NavbarMenu />
    </NavbarContainer>
  );
}
