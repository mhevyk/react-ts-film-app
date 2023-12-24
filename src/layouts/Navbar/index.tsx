import styled from "styled-components";
import { NavbarMenu } from "./NavbarMenu";
import { ROOT_CONTAINER_SPACING } from "@layouts/RootLayout";

type NavbarContainerProps = {
  $spacing: number;
};

const NavbarContainer = styled.div<NavbarContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  margin-left: ${(props) => props.$spacing}px;
`;

export function Navbar() {
  return (
    <NavbarContainer $spacing={ROOT_CONTAINER_SPACING}>
      <NavbarMenu />
    </NavbarContainer>
  );
}
