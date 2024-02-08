import { Logo } from "@components/ui/Logo";
import { Menu } from "@components/ui/Menu";
import { useMediaQuery } from "@hooks/useMediaQuery";
import styled, { css } from "styled-components";
import { sidebarMenuItems } from "./data/sidebarMenuItems";
import { IconButton } from "@components/ui/IconButton";

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

export const Sidebar = () => {
  const isLargeScreen = useMediaQuery((media) => media.screens.lg);

  // NOTE: on mobile screens mobile sidebar modal is rendered inside Navbar component
  if (!isLargeScreen) {
    return null;
  }

  return (
    <SidebarContainer>
      <Logo />
      <Menu
        items={sidebarMenuItems}
        renderItem={(item) => <IconButton icon={item.icon} size={19.2} />}
        direction="column"
        wrapperStyles={css`
          gap: 80px;
        `}
      />
    </SidebarContainer>
  );
};
