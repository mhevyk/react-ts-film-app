import { Swiper, SwiperClass, SwiperProps } from "swiper/react";
import {
  EffectFade,
  A11y,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import styled, { RuleSet } from "styled-components";
import { SliderNavigation } from "./SliderNavigation";
import { useSliderNavigation } from "../hooks/useSliderNavigation";

type ExtraStyledCSS = {
  $css?: RuleSet;
};

const SliderWrapper = styled.div<ExtraStyledCSS>`
  // css variables for internal use of swiper
  --swiper-pagination-color: ${(props) => props.theme.colors.white};
  --swiper-pagination-bottom: 24px;
  --swiper-pagination-bullet-inactive-color: ${(props) =>
    props.theme.colors.light};
  --swiper-pagination-bullet-horizontal-gap: 8px;
  position: relative;

  ${(props) => props.$css}
`;

const SwiperStyled = styled(Swiper)<ExtraStyledCSS>`
  ${(props) => props.$css}
`;

export type SliderProps = {
  autoplay?: boolean;
  pagination?: boolean;
  navigationControls?: boolean;
  allowSwiping?: boolean;
  wrapperStyles?: RuleSet;
  sliderStyles?: RuleSet;
} & Omit<
  SwiperProps,
  | "autoplay"
  | "pagination"
  | "navigation"
  | "modules"
  | "fadeEffect"
  | "pagination"
  | "noSwiping"
>;

export function Slider({
  pagination = false,
  navigationControls = false,
  autoplay = false,
  wrapperStyles,
  sliderStyles,
  onReachEnd,
  slidesPerView = 1,
  ...rest
}: SliderProps) {
  const sliderControlsRef = useSliderNavigation();

  const handleReachEnd = (swiper: SwiperClass) => {
    if (swiper.progress >= 0.7 && onReachEnd) {
      onReachEnd(swiper);
    }
  };

  return (
    <SliderWrapper $css={wrapperStyles}>
      {navigationControls && <SliderNavigation ref={sliderControlsRef} />}
      <SwiperStyled
        modules={[A11y, EffectFade, Pagination, Navigation, Autoplay]}
        fadeEffect={{ crossFade: true }}
        noSwipingClass="swiper-slide"
        slidesPerView={slidesPerView}
        navigation={{
          enabled: navigationControls,
          nextEl: sliderControlsRef.current.nextArrow,
          prevEl: sliderControlsRef.current.prevArrow,
          disabledClass: "d-none",
        }}
        autoplay={
          autoplay && {
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }
        }
        pagination={{ enabled: pagination, clickable: false }}
        onReachEnd={handleReachEnd}
        $css={sliderStyles}
        {...rest}
      />
    </SliderWrapper>
  );
}
