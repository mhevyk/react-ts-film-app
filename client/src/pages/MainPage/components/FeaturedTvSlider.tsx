import styled from "styled-components";
import { Slide, Slider } from "@components/ui/Slider";

const FeaturedTVSlide = styled(Slide)`
  width: 504px;
  height: 736px;
  // TODO: fix styles
  background-color: red;
`;

export function FeaturedTvSlider() {
  return (
    <Slider slidesPerView="auto" spaceBetween={1} navigationControls>
      {Array.from({ length: 10 }, (_, index) => (
        <FeaturedTVSlide key={index}>Slide {index + 1}</FeaturedTVSlide>
      ))}
    </Slider>
  );
}
