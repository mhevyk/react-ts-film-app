import styled from "styled-components";
import { SidebarMenu } from "./SidebarMenu";
import { ROOT_CONTAINER_SPACING } from "@layouts/RootLayout";

type SidebarContainerProps = {
  $width: number;
};

const SidebarContainer = styled.aside<SidebarContainerProps>`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 2;
  background-color: green; // TODO: change to theme color
  width: ${(props) => props.$width}px;
`;

export function Sidebar() {
  return (
    <SidebarContainer $width={ROOT_CONTAINER_SPACING}>
      <SidebarMenu />
    </SidebarContainer>
  );
}
