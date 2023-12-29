import { BackdropSlider } from "@components/BackdropSlider";
import { FeaturedTvSection } from "@components/FeaturedTvSection";
import { NewReleasesSection } from "@components/NewReleasesSection";
import { Navbar } from "@layouts/Navbar";
import { Sidebar } from "@layouts/Sidebar";
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
  background-color: rgb(${({ theme }) => theme.colors.backgroundRGB});

  @media ${media.screens.md} {
    padding: 0 ${({ theme }) => theme.globals.contentContainerSpacing}; // TODO: remove top scacing, its just for test
  }
`;

export function MainPage() {
  return (
    <>
      <Sidebar />
      <Header>
        <Navbar />
        <BackdropSlider />
      </Header>
      <ContentWrapper>
        <NewReleasesSection />
        <FeaturedTvSection />
      </ContentWrapper>
    </>
  );
}
