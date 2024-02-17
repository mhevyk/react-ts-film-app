import { NavLink as NavLinkBase } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(NavLinkBase)`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  white-space: nowrap;

  &.active {
    color: ${(props) => props.theme.colors.accent};
  }
`;
