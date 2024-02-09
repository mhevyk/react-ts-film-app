import { BackdropSlider } from "./components/BackdropSlider";
import { Navbar } from "@layouts/Navbar";
import { media } from "@theme/mediaQueries";
import styled from "styled-components";
import { Section } from "@components/ui/Section";
import { UpcomingFilmsSlider } from "./components/UpcomingFilmsSlider";
import { FeaturedTvSlider } from "./components/FeaturedTvSlider";
import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@components/styled/ChevronRightIcon";

const Header = styled.header`
  position: sticky;
  z-index: 1;
  top: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 5;
  background-color: ${(props) => props.theme.colors.background};

  @media ${media.screens.md} {
    padding: 0 ${(props) => props.theme.globals.contentContainerSpacing}px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export function MainPage() {
  return (
    <>
      <Header>
        <Navbar variant="absolute" />
        <BackdropSlider />
      </Header>
      <ContentWrapper>
        <Section title="Upcoming Films" navigatesTo="/upcoming">
          <UpcomingFilmsSlider />
          <ButtonContainer>
            <Button variant="primary" outlined as={Link} to="/upcoming">
              View All...
              <ChevronRightIcon size={20} />
            </Button>
          </ButtonContainer>
        </Section>
        <Section title="Featured TV shows" navigatesTo="/featured-tv"></Section>
      </ContentWrapper>
    </>
  );
}
