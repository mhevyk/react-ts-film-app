import { BackdropSlider } from "@components/BackdropSlider";
import { FeaturedTvSection } from "@components/FeaturedTvSection";
import { NewReleasesSection } from "@components/NewReleasesSection";
import { Navbar } from "@layouts/Navbar";
import { media } from "@theme/mediaQueries";
import styled from "styled-components";

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
    padding: 0 ${(props) => props.theme.globals.contentContainerSpacing};
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
        <NewReleasesSection />
        <FeaturedTvSection />
      </ContentWrapper>
    </>
  );
}
