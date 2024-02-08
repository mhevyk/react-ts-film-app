import { Slide, Slider } from "@components/ui/Slider";
import styled from "styled-components";

const NewReleaseSlide = styled(Slide)`
  width: 292px;
  height: 440px;
  // TODO: fix styles
  background-color: red;
`;

export function NewReleasesSlider() {
  return (
    <Slider slidesPerView="auto" spaceBetween={1} navigationControls>
      {Array.from({ length: 10 }, (_, index) => (
        <NewReleaseSlide key={index}>Slide {index + 1}</NewReleaseSlide>
      ))}
    </Slider>
  );
}
