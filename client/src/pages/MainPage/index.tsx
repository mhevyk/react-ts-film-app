import { media } from "@theme/mediaQueries";
import styled from "styled-components";
import { Section } from "@components/ui/Section";
import { UpcomingFilmsSlider } from "./components/UpcomingFilmsSlider";
import { Button } from "@components/ui/Button";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@components/styled/ChevronRightIcon";
import { PopularFilmsSlider } from "./components/PopularFilmsSlider";

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
    </>
  );
}
