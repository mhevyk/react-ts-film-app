import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import spaceGirlImage from "@images/space-girl.jpg";
import { media } from "@theme/mediaQueries";

const Container = styled.div`
  padding: 15px 40px;
  display: grid;
  row-gap: 40px;
  height: 100vh;
  grid-template-areas:
    "Text"
    "Bubble"
    "Button";

  @media ${media.screens.md} {
    grid-template-columns: 3fr 5fr;
    grid-template-areas:
      "Text Bubble"
      "Button Bubble";
    column-gap: 50px;
  }

  @media ${media.screens.xl} {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextContainer = styled.div`
  grid-area: Text;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 70px;
  color: ${(props) => props.theme.colors.white};

  @media ${media.screens.xl} {
    font-size: 130px;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.light};
  line-height: 25px;
  text-align: center;

  @media ${media.screens.xl} {
    font-size: 20px;
  }
`;

const bubble = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 70% 40%/50% 60% 30% 60%;
  } 
`;

const BubbleImageContainer = styled.div`
  grid-area: Bubble;
  margin: auto;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  background-image: url("${spaceGirlImage}");
  background-size: cover;
  animation: ${bubble} 5s ease-in-out alternate infinite;
  transition: all 1s ease-in-out;

  @media ${media.screens.md} {
    max-width: 550px;
  }

  @media ${media.screens.lg} {
    max-width: 80vh;
  }
`;

const ButtonContainer = styled.div`
  grid-area: Button;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export function NotFoundPage() {
  return (
    <Container>
      <TextContainer>
        <Title>404</Title>
        <Description>
          Sorry, the page you are looking for might be in another dimension...
        </Description>
      </TextContainer>
      <BubbleImageContainer />
      <ButtonContainer>
        <Button variant="secondary" as={Link} to="/">
          Go Home
        </Button>
      </ButtonContainer>
    </Container>
  );
}
