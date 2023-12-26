import { Slider } from "@components/Slider";
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
  padding: 50px 0 0; // TODO: remove top scacing, its just for test
  background-color: rgb(${({ theme }) => theme.colors.backgroundRGB});

  ${media.screens.md} {
    padding: 50px ${({ theme }) => theme.globals.contentContainerSpacing} 0; // TODO: remove top scacing, its just for test
  }

  & > div {
    // TODO: remove later, its just for test
    margin-bottom: 50px;
  }
`;

export function MainPage() {
  return (
    <>
      <Header>
        <Navbar />
        <Slider
          variant="full-screen"
          slides={[1, 2, 3]}
          renderSlide={(slide) => `Full-screen slide ${slide}`}
          pagination
          navigationControls
          autoplay
        />
      </Header>
      <ContentWrapper>
        <Slider
          variant="medium"
          slides={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderSlide={(slide) => `Small slide ${slide}`}
          navigationControls
        />
        <Slider
          variant="small"
          slides={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderSlide={(slide) => `Mediaum slide ${slide}`}
          navigationControls
        />
      </ContentWrapper>
    </>
  );
}
