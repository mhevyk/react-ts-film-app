import { FilmPoster, SkeletonFilmPoster } from "@components/styled/FilmPoster";
import { Slide } from "@components/ui/Slider";
import { ComponentPropsWithoutRef } from "react";

// TODO: remove ts-expect-error

export function FilmPosterSlide(
  props: Omit<ComponentPropsWithoutRef<typeof FilmPoster>, "as">
) {
  // @ts-expect-error
  return <FilmPoster as={Slide} {...props} />;
}

export function SkeletonPosterSlide(
  props: ComponentPropsWithoutRef<typeof SkeletonFilmPoster>
) {
  // @ts-expect-error
  return <SkeletonFilmPoster as={Slide} {...props} />;
}

FilmPosterSlide.displayName = "SwiperSlide";
SkeletonPosterSlide.displayName = "SwiperSlide";
