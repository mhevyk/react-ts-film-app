import styled from "styled-components";
import { SidebarMenu } from "./SidebarMenu";

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  height: 100dvh;
  z-index: 100;
  background-color: rgba(${({ theme }) => theme.colors.backgroundRGB}, 0.8);
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarMenu />
    </SidebarContainer>
  );
}
