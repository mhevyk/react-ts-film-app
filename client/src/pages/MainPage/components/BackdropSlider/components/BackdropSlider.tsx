import { Slider } from "@components/ui/Slider";
import { useFilms } from "../hooks/useFilms";
import { BackdropSlide } from "../styled/BackdropSlide";
import { wrapperStyles } from "../styled/wrapperStyles";
import { BackdropFilm } from "./BackdropFilm";

export function BackdropSlider() {
  const slides = useFilms([399566, 297762, 791373]);

  return (
    <Slider
      effect="fade"
      wrapperStyles={wrapperStyles}
      pagination
      navigationControls
      loop
      autoplay
      noSwiping
    >
      {slides.map((slide) => (
        <BackdropSlide key={slide.data.id}>
          <BackdropFilm film={slide.data} />
        </BackdropSlide>
      ))}
    </Slider>
  );
}
