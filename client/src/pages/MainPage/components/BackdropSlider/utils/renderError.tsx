import styled from "styled-components";

const ErrorMessage = styled.p`
  text-align: center;
`;

// TODO: improve ui if needed
export function renderError(error: Error) {
  return <ErrorMessage>Error: {error.message}</ErrorMessage>;
}
