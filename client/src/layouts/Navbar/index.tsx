import styled, { css } from "styled-components";
import { NavbarMenu } from "./components/NavbarMenu";
import { StyledPick } from "src/types/helpers";

type NavbarContainerProps = StyledPick<NavbarProps, "variant">;

const NavbarContainer = styled.div<NavbarContainerProps>`
  position: ${(props) => props.$variant};
  top: 0;
  right: 0;
  z-index: 15;
  width: 100%;

  ${(props) => {
    if (props.$variant === "sticky") {
      return css`
        background-color: ${props.theme.colors.background};
      `;
    }
  }}
`;

type NavbarVariant = "sticky" | "absolute";

type NavbarProps = {
  variant?: NavbarVariant;
};

export function Navbar({ variant = "sticky" }: NavbarProps) {
  return (
    <NavbarContainer $variant={variant}>
      <NavbarMenu />
    </NavbarContainer>
  );
}
