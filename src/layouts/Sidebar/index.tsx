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
  background-color: rgba(29, 29, 29, 0.8); // TODO: change to theme color
`;

export function Sidebar() {
  return (
    <SidebarContainer $width={ROOT_CONTAINER_SPACING}>
      <SidebarMenu />
    </SidebarContainer>
  );
}
