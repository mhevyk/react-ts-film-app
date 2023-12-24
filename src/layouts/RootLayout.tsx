import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import styled from "styled-components";

type ContentContainerProps = {
  $spacing: number;
};

const ContentContainer = styled.div<ContentContainerProps>`
  padding-left: ${(props) => props.$spacing}px;
`;

export const ROOT_CONTAINER_SPACING = 55;

export function RootLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ContentContainer $spacing={ROOT_CONTAINER_SPACING}>
        <Outlet />
      </ContentContainer>
    </>
  );
}
