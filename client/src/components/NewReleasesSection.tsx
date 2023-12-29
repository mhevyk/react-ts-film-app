import { Section } from "@components/ui/Section";
import { Slider } from "@components/ui/Slider";

export function NewReleasesSection() {
  return (
    <Section title="New releases" navigatesTo="/new-releases">
      <Slider
        variant="medium"
        slides={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderSlide={(slide) => `Small slide ${slide}`}
        navigationControls
      />
    </Section>
  );
}
