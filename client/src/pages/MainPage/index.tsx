import { BackdropSlider } from "./components/BackdropSlider";
import { Navbar } from "@layouts/Navbar";
import { media } from "@theme/mediaQueries";
import styled from "styled-components";
import { Section } from "@components/ui/Section";
import { NewReleasesSlider } from "./components/NewReleasesSlider";
import { FeaturedTvSlider } from "./components/FeaturedTvSlider";

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

export function MainPage() {
  return (
    <>
      <Header>
        <Navbar variant="absolute" />
        <BackdropSlider />
      </Header>
      <ContentWrapper>
        <Section title="New Releases" navigatesTo="/new-releases">
          <NewReleasesSlider />
        </Section>
        <Section title="Featured TV shows" navigatesTo="/featured-tv">
          {/* <FeaturedTvSlider /> */}
        </Section>
      </ContentWrapper>
    </>
  );
}
