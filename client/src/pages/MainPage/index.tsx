import { BackdropSlider } from "./components/BackdropSlider";
import { Navbar } from "@layouts/Navbar";
import { media } from "@theme/mediaQueries";
import styled from "styled-components";
import { Section } from "@components/ui/Section";
import { UpcomingFilmsSlider } from "./components/UpcomingFilmsSlider";
import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@components/styled/ChevronRightIcon";
import { PopularFilmsSlider } from "./components/PopularFilmsSlider";
import { PageContentWrapper } from "@components/styled/PageContentWrapper";

const Header = styled.header`
  position: sticky;
  z-index: 1;
  top: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding-right: 20px;

  @media ${media.screens.md} {
    padding-right: 0;
  }
`;

export function MainPage() {
  return (
    <>
      <Header>
        <Navbar variant="absolute" />
        <BackdropSlider />
      </Header>
      <PageContentWrapper>
        <Section title="Upcoming Films" navigatesTo="/upcoming">
          <UpcomingFilmsSlider />
          <ButtonContainer>
            <Button variant="primary" outlined as={Link} to="/upcoming">
              View All...
              <ChevronRightIcon size={20} />
            </Button>
          </ButtonContainer>
        </Section>
        <Section title="Popular Films" navigatesTo="/popular">
          <PopularFilmsSlider />
          <ButtonContainer>
            <Button variant="primary" outlined as={Link} to="/popular">
              View All...
              <ChevronRightIcon size={20} />
            </Button>
          </ButtonContainer>
        </Section>
      </PageContentWrapper>
    </>
  );
}
