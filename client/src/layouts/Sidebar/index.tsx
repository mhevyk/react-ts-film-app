import { Logo } from "@components/ui/Logo";
import { useMediaQuery } from "@hooks/useMediaQuery";
import styled from "styled-components";
import { mainMenuItems } from "../../data/mainMenuItems";
import { IconButton } from "@components/ui/IconButton";
import { Menu } from "@components/ui/Menu";
import { Link } from "react-router-dom";
import { NavLink } from "@components/styled/NavLink";

const SidebarContainer = styled.aside`
  position: fixed;
  height: 100vh;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.backgroundWithOpacity(0.8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding-top: 40px;
`;

const NavLinkStyled = styled(NavLink)`
  &.active svg {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const Sidebar = () => {
  const isLargeScreen = useMediaQuery((media) => media.screens.lg);

  // NOTE: on mobile screens mobile sidebar modal is rendered inside Navbar component
  if (!isLargeScreen) {
    return null;
  }

  return (
    <SidebarContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Menu
        items={mainMenuItems}
        renderItem={(item) => (
          <NavLinkStyled to={item.path}>
            <IconButton icon={item.icon} size={19.2} />
          </NavLinkStyled>
        )}
        getKey={(item) => item.label}
        listStyle={{ direction: "column", gap: 80 }}
      />
    </SidebarContainer>
  );
};
