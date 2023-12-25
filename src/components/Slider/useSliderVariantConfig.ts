import { MutableRefObject, RefObject } from "react";
import { SliderVariant } from ".";
import { SwiperRef } from "swiper/react";
import { useContainerWidth } from "./useContainerWidth";

type SliderVariantConfigProps = {
  slideWidth: number;
  spaceBetween?: number;
};

const sliderConfig: Record<SliderVariant, SliderVariantConfigProps> = {
  "full-screen": {
    slideWidth: window.innerWidth,
  },
  small: {
    slideWidth: 504,
  },
  medium: {
    slideWidth: 292,
    spaceBetween: 16,
  },
};

function calculateSlidesPerView(
  sliderWidth: number,
  slideWidth: number,
  slideGap?: number
) {
  if (slideWidth >= sliderWidth) {
    return 1;
  }

  const gap = slideGap ?? 0;
  const calculatedSlidesPerView =
    (sliderWidth + gap) / (slideWidth - gap) + 0.45; // 0.45 is kind of salt to receive natural slides division
  return calculatedSlidesPerView;
}

export function useSliderVariantConfig(
  ref: MutableRefObject<SwiperRef | null>,
  variant: SliderVariant
) {
  const sliderWidth = useContainerWidth(ref as RefObject<HTMLElement | null>);
  const variantConfig = sliderConfig[variant];

  const slidesPerView =
    variant === "full-screen"
      ? 1
      : calculateSlidesPerView(
          sliderWidth,
          variantConfig.slideWidth,
          variantConfig.spaceBetween
        );

  return { slidesPerView, ...variantConfig };
}
