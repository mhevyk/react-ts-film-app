import { SkeletonFilmPoster } from "@components/styled/FilmPoster";
import { Skeleton } from "@components/ui/Skeleton";
import { Slider } from "@components/ui/Slider";
import { PopularFilmSlide } from "../styled/PopularFilmSlide";

function SkeletonSlides() {
  return (
    <Skeleton.List amount={10}>
      <PopularFilmSlide>
        <SkeletonFilmPoster />
      </PopularFilmSlide>
    </Skeleton.List>
  );
}

SkeletonSlides.displayName = "SwiperSlide";

export function PopularFilmSliderLoadingFallback() {
  return (
    <Slider navigationControls spaceBetween={16} slidesPerView="auto">
      <SkeletonSlides />
    </Slider>
  );
}
