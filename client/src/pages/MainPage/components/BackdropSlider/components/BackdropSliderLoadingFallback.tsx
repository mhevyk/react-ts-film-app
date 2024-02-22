import { BadgeGroup } from "@components/styled/BadgeGroup";
import { Skeleton } from "@components/ui/Skeleton";
import { Slider } from "@components/ui/Slider";
import { BackdropSlide } from "../styled/BackdropSlide";
import { wrapperStyles } from "../styled/wrapperStyles";

function SkeletonBackdropSlides() {
  return (
    <Skeleton.List amount={3}>
      <BackdropSlide>
        <BadgeGroup>
          <Skeleton.Badge />
          <Skeleton.Badge />
          <Skeleton.Badge />
        </BadgeGroup>
        <Skeleton width={100} />
        <Skeleton.Heading />
        <Skeleton.Paragraph lines={5} />
        <Skeleton.Button />
      </BackdropSlide>
    </Skeleton.List>
  );
}

// without this line won`t work
SkeletonBackdropSlides.displayName = "SwiperSlide";

export function BackdropSliderLoadingFallback() {
  return (
    <Slider
      effect="fade"
      wrapperStyles={wrapperStyles}
      pagination
      navigationControls
      noSwiping
    >
      <SkeletonBackdropSlides />
    </Slider>
  );
}
