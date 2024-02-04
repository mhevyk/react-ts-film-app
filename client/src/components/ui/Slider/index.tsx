import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
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

import styled, { RuleSet, css } from "styled-components";
import { useRef } from "react";
import { useSliderVariantConfig } from "./hooks/useSliderVariantConfig";
import {
  SliderNavigation,
  SliderNavigationControlsRef,
} from "./components/SliderNavigation";
import { SliderProps, SliderVariant } from "./types/slider";

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

type SlideStyledProps = ExtraStyledCSS & {
  $variant: SliderVariant;
  $showSkeleton: boolean;
};

const SlideStyled = styled(SwiperSlide)<SlideStyledProps>`
  position: relative;
  ${(props) => {
    if (props.$variant === "small") {
      return css`
        aspect-ratio: 63/92;
      `;
    }

    if (props.$variant === "medium") {
      return css`
        aspect-ratio: 73/110;
      `;
    }

    return css`
      aspect-ratio: 50/27;
    `;
  }};

  ${(props) => {
    if (props.$showSkeleton) {
      return css`
        background-color: ${props.theme.colors.lightWithOpacity(0.1)};
      `;
    }
  }}

  ${(props) => props.$css}
`;

export function Slider<TSlide>({
  slides,
  renderSlide,
  skeleton: { show: showSkeleton = false, renderSkeleton } = {},
  pagination = false,
  navigationControls = false,
  variant = "full-screen",
  autoplay = false,
  wrapperStyles,
  sliderStyles,
  slideStyles,
  onReachEnd,
  ...rest
}: SliderProps<TSlide>) {
  const swiperRef = useRef<SwiperRef | null>(null);
  const { slidesPerView, spaceBetween } = useSliderVariantConfig(
    swiperRef,
    variant
  );

  // use default values for controls, because otherwise it won`t work
  const navigationControlsRef = useRef<SliderNavigationControlsRef>({
    prevArrow: null,
    nextArrow: null,
  });

  const shouldRenderSkeleton = showSkeleton && renderSkeleton;

  const renderSlideContent = (slide: TSlide) => {
    if (shouldRenderSkeleton) {
      return renderSkeleton();
    }

    return renderSlide(slide);
  };

  const handleReachEnd = (swiper: SwiperClass) => {
    if (swiper.progress >= 0.7 && onReachEnd) {
      onReachEnd(swiper);
    }
  };

  const { prevArrow, nextArrow } = navigationControlsRef.current;

  return (
    <SliderWrapper $css={wrapperStyles}>
      {navigationControls && <SliderNavigation ref={navigationControlsRef} />}

      <SwiperStyled
        ref={swiperRef}
        modules={[A11y, EffectFade, Pagination, Navigation, Autoplay]}
        effect={variant === "full-screen" ? "fade" : undefined}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={
          navigationControls && {
            nextEl: nextArrow,
            prevEl: prevArrow,
            disabledClass: "d-none",
          }
        }
        autoplay={
          autoplay && {
            delay: 5000,
            disableOnInteraction: true,
          }
        }
        noSwiping={variant === "full-screen"}
        noSwipingClass="swiper-slide"
        fadeEffect={variant === "full-screen" ? { crossFade: true } : undefined}
        pagination={pagination && { clickable: false }}
        onReachEnd={handleReachEnd}
        $css={sliderStyles}
        {...rest}
      >
        {slides.map((slide, index) => (
          <SlideStyled
            key={index}
            $variant={variant}
            $showSkeleton={showSkeleton}
            $css={
              typeof slideStyles === "function"
                ? slideStyles(slide)
                : slideStyles
            }
          >
            {renderSlideContent(slide)}
          </SlideStyled>
        ))}
      </SwiperStyled>
    </SliderWrapper>
  );
}
