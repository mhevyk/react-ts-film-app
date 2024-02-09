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
>;

export function Slider({
  pagination = false,
  navigationControls = false,
  autoplay = false,
  wrapperStyles,
  sliderStyles,
  onReachEnd,
  slidesPerView = "auto",
  noSwiping = false,
  ...rest
}: SliderProps) {
  const [navigationControlsRef, handleNavigationInit] = useSliderNavigation();

  const handleReachEnd = (swiper: SwiperClass) => {
    if (swiper.progress >= 0.7 && onReachEnd) {
      onReachEnd(swiper);
    }
  };

  return (
    <SliderWrapper $css={wrapperStyles}>
      {navigationControls && <SliderNavigation ref={navigationControlsRef} />}
      <SwiperStyled
        // used manual init of navigation, because it is not working with refs correctly (github issue), but i don`t want to use selectors instead like prevEl and nextEl in navigation options
        onBeforeInit={navigationControls ? handleNavigationInit : undefined}
        modules={[A11y, EffectFade, Pagination, Navigation, Autoplay]}
        fadeEffect={{ crossFade: true }}
        noSwiping={noSwiping}
        noSwipingClass="swiper-slide"
        slidesPerView={slidesPerView}
        autoplay={
          autoplay && {
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }
        }
        // NOTE: passing object conditionally to avoid rendering empty div for pagination if pagination flag is false
        pagination={pagination && { clickable: false }}
        onReachEnd={handleReachEnd}
        $css={sliderStyles}
        {...rest}
      />
    </SliderWrapper>
  );
}
