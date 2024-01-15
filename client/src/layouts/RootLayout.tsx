import { Outlet } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
  position: relative;
  max-width: ${(props) => props.theme.globals.contentContainerMaxWidth};
  margin: auto;
`;

export function RootLayout() {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
}
