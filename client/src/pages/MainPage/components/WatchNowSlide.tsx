import { Slide, SlideProps } from "@components/ui/Slider";
import { Link } from "react-router-dom";
import styled from "styled-components";
import chevronRightIcon from "@icons/chevron-right.svg";
import { PropsWithChildren } from "react";
import { SimpleFilm } from "@schemas/filmSchema";

const ANIMATED_CONTAINER_CLASSNAME = "animated";
const WATCH_NOW_CONTAINER_CLASSNAME = "watch-now";

const NewReleasesSlide = styled(Slide)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 24px 24px;
  background-color: red;

  &:hover {
    .${WATCH_NOW_CONTAINER_CLASSNAME} {
      opacity: 1;
    }

    .${ANIMATED_CONTAINER_CLASSNAME} {
      transform: translateY(0);
      margin-bottom: 16px;
    }
  }
`;

const WatchNowContainer = styled(Link)`
  display: flex;
  width: fit-content;
  opacity: 0;
  transition: opacity 500ms;
`;

const WatchNowText = styled.span`
  line-height: 24px;
  color: ${(props) => props.theme.colors.white};
`;

const ShevronRightIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transform: translateY(25px);
  margin-bottom: 0;
  transition: all 500ms;
`;

type NewReleasesSlider = PropsWithChildren & {
  filmId: SimpleFilm["id"];
} & SlideProps;

export function WatchNowSlide({
  children,
  filmId,
  ...rest
}: NewReleasesSlider) {
  return (
    <NewReleasesSlide {...rest}>
      <CardContentContainer className={ANIMATED_CONTAINER_CLASSNAME}>
        {children}
      </CardContentContainer>
      <WatchNowContainer
        to={`/films/${filmId}`}
        className={WATCH_NOW_CONTAINER_CLASSNAME}
      >
        <WatchNowText>Watch Now</WatchNowText>
        <ShevronRightIcon src={chevronRightIcon} alt="Chevron Right icon" />
      </WatchNowContainer>
    </NewReleasesSlide>
  );
}

// Needed to work correctly
WatchNowSlide.displayName = "SwiperSlide";
