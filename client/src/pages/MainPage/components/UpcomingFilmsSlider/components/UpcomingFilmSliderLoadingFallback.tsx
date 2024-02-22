import { SkeletonFilmPoster } from "@components/styled/FilmPoster";
import { Skeleton } from "@components/ui/Skeleton";
import { Slider } from "@components/ui/Slider";
import { UpcomingFilmSlide } from "../styled/UpcomingFilmSlide";

function SkeletonSlides() {
  return (
    <Skeleton.List amount={10}>
      <UpcomingFilmSlide>
        <SkeletonFilmPoster />
      </UpcomingFilmSlide>
    </Skeleton.List>
  );
}

SkeletonSlides.displayName = "SwiperSlide";

export function UpcomingFilmSliderLoadingFallback() {
  return (
    <Slider navigationControls spaceBetween={16}>
      <SkeletonSlides />
    </Slider>
  );
}
