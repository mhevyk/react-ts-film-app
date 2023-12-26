import styled from "styled-components";
import { NavbarMenu } from "./NavbarMenu";

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
`;

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarMenu />
    </NavbarContainer>
  );
}
