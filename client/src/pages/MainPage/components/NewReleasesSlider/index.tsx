import { Slider } from "@components/ui/Slider";
import { WatchNowSlide } from "../WatchNowSlide";
import styled from "styled-components";

const NewReleasesSlide = styled(WatchNowSlide)`
  width: 292px;
  height: 440px;
`;

export function NewReleasesSlider() {
  return (
    <Slider spaceBetween={1} navigationControls>
      {Array.from({ length: 10 }, (_, index) => (
        <NewReleasesSlide key={index} filmId={index}>
          Slide {index + 1}
        </NewReleasesSlide>
      ))}
    </Slider>
  );
}
