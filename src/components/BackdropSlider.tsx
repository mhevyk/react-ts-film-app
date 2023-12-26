import { Slider } from "./Slider";

export function BackdropSlider() {
  return (
    <Slider
      variant="full-screen"
      slides={[1, 2, 3]}
      renderSlide={(slide) => `Full-screen slide ${slide}`}
      pagination
      navigationControls
      autoplay
    />
  );
}
