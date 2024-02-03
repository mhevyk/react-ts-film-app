import { Slider, SliderProps } from "@components/ui/Slider";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import shevronRightIcon from "@icons/chevron-right.svg";
import { LazyImageContainer } from "@components/ui/LazyImageContainer";

const ANIMATED_CONTAINER_CLASSNAME = "animated";
const WATCH_NOW_CONTAINER_CLASSNAME = "watch-now";

const Card = styled.article`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 24px 24px;
  height: 100%;
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

const slideStyles = css`
  &:hover {
    img {
      scale: 1.06;
    }

    .${WATCH_NOW_CONTAINER_CLASSNAME} {
      opacity: 1;
    }

    .${ANIMATED_CONTAINER_CLASSNAME} {
      transform: translateY(0);
      margin-bottom: 16px;
    }
  }
`;

type PosterSliderProps<TSlide> = SliderProps<TSlide> & {
  getImagePath: (slide: TSlide) => string;
  getWatchNowPath: (slide: TSlide) => string;
};

export function PosterSlider<TSlide>({
  variant,
  slides,
  renderSlide,
  getImagePath,
  getWatchNowPath,
  onReachEnd,
  ...rest
}: PosterSliderProps<TSlide>) {
  return (
    <Slider
      variant={variant}
      slides={slides}
      renderSlide={(slide) => (
        <>
          <Card>
            <CardContentContainer className={ANIMATED_CONTAINER_CLASSNAME}>
              {renderSlide(slide)}
            </CardContentContainer>
            <WatchNowContainer
              to={getWatchNowPath(slide)}
              className={WATCH_NOW_CONTAINER_CLASSNAME}
            >
              <WatchNowText>Watch Now</WatchNowText>
              <ShevronRightIcon
                src={shevronRightIcon}
                alt="Shevron Right icon"
              />
            </WatchNowContainer>
          </Card>
          <LazyImageContainer
            src={getImagePath(slide)}
            imageWrapperStyles={css`
              position: absolute;
              inset: 0;
              overflow: hidden;
            `}
            imageLoadedStyles={css`
              transition: scale 400ms;
              filter: brightness(40%);
            `}
          />
        </>
      )}
      navigationControls
      slideStyles={slideStyles}
      onReachEnd={onReachEnd}
      {...rest}
    />
  );
}
