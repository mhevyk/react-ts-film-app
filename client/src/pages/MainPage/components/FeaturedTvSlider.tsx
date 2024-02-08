import styled from "styled-components";
import { Slider } from "@components/ui/Slider";
import { WatchNowSlide } from "./WatchNowSlide";

const FeaturedTVSlide = styled(WatchNowSlide)`
  width: 504px;
  height: 736px;
`;

export function FeaturedTvSlider() {
  return (
    <Slider spaceBetween={16} navigationControls>
      {Array.from({ length: 10 }, (_, index) => (
        <FeaturedTVSlide key={index} filmId={index}>
          Slide {index + 1}
        </FeaturedTVSlide>
      ))}
    </Slider>
  );
}
