import { Section } from "./Section";
import { Slider } from "./Slider";

export function FeaturedTvSection() {
  return (
    <Section title="Featured TV shows" navigatesTo="/featured-tvs">
      <Slider
        variant="small"
        slides={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderSlide={(slide) => `Mediaum slide ${slide}`}
        navigationControls
      />
    </Section>
  );
}
