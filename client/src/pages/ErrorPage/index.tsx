import { Button } from "@components/ui/Button";
import { lazyImport } from "@utils/lazyImport";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import filmGirlImage from "@images/film-girl.jpg";

const ErrorDetails = lazyImport(
  () => import("./components/ErrorDetails"),
  "ErrorDetails"
);

const Container = styled.div`
  background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.backgroundWithOpacity(0.8)},
      ${(props) => props.theme.colors.backgroundWithOpacity(0.8)}
    ),
    url(${filmGirlImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 15px 40px;
  row-gap: 20px;
`;

const Title = styled.h1`
  font-size: 70px;
  color: ${(props) => props.theme.colors.white};
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.light};
  line-height: 25px;
  text-align: center;
`;

export function ErrorPage() {
  return (
    <Container>
      <Title>Oops...</Title>
      <Description>Something went wrong, but we are working on it</Description>
      <Button variant="secondary" as={Link} to="/">
        Go Home
      </Button>
      {import.meta.env.DEV && (
        <Suspense fallback={<p>Loading error details...</p>}>
          <ErrorDetails />
        </Suspense>
      )}
    </Container>
  );
}
