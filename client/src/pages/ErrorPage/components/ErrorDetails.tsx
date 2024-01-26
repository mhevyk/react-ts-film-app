import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styled from "styled-components";

const Pre = styled.pre`
  overflow: auto;
  max-width: 90vw;
  color: ${(props) => props.theme.colors.white};
`;

function renderErrorDetails(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Pre>Type: RouteError</Pre>
        {error.data?.message && <Pre>Message: {error.data.message}</Pre>}
        <Pre>Status: {error.status}</Pre>
        {error.statusText && <Pre>Status Text: {error.statusText}</Pre>}
      </>
    );
  }

  if (error instanceof Error) {
    return (
      <>
        <Pre>Type: {error.name}</Pre>
        <Pre>Message: {error.message}</Pre>
        {error.stack && (
          <Pre>
            {/* Using slice to cut off duplicate error name and message */}
            Call Stack: {error.stack.slice(error.stack.indexOf("at") - 5)}
          </Pre>
        )}
      </>
    );
  }

  return <Pre>Unknown error occured</Pre>;
}

const Wrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.lightWithOpacity(0.5)};
  margin-top: 30px;
`;

export function ErrorDetails() {
  const error = useRouteError();

  return <Wrapper>{renderErrorDetails(error)}</Wrapper>;
}
