import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
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
import "./Slider.css";

import chevronRightIcon from "@icons/chevron-right.svg";
import chevronLeftIcon from "@icons/chevron-left.svg";
import styled, { RuleSet, css } from "styled-components";
import { ReactNode, useId, useRef } from "react";
import { HoverableIcon } from "../HoverableIcon";
import { useSliderVariantConfig } from "./hooks/useSliderVariantConfig";

type StyledComponentsCSS = RuleSet<object>;

const SliderWrapper = styled.div<{ $wrapperStyles?: StyledComponentsCSS }>`
  --swiper-navigation-color: white; // TODO: replace with theme styles
  --swiper-pagination-color: rgba(226, 219, 219);
  --swiper-pagination-bullet-horizontal-gap: 8px;
  --slider-padding: ${({ theme }) => theme.globals.sliderSpacing};
  position: relative;
  ${(props) => props.$wrapperStyles}
`;

const SwiperStyled = styled(Swiper)<{ $sliderStyles?: StyledComponentsCSS }>`
  ${(props) => props.$sliderStyles}
`;

type SlideStyledProps = {
  $slideStyles?: StyledComponentsCSS;
  $variant: SliderVariant;
};

const SlideStyled = styled(SwiperSlide)<SlideStyledProps>`
  // TODO: replace with theme styles
  background-color: gray;
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
      min-height: 300px;
      @media (min-width: 767px) {
        min-height: unset;
        max-height: 648px;
      }
    `;
  }};

  display: flex; // TODO: remove it, it is just for testing
  align-items: center;
  justify-content: center;

  ${(props) => props.$slideStyles}
`;

export type SliderVariant = "full-screen" | "small" | "medium";

type SliderProps<T> = {
  slides: T[];
  renderSlide: (slide: T) => ReactNode;
  variant?: SliderVariant;
  autoplay?: boolean;
  pagination?: boolean;
  navigationControls?: boolean;
  wrapperStyles?: StyledComponentsCSS;
  sliderStyles?: StyledComponentsCSS;
  slideStyles?: StyledComponentsCSS;
};

export function Slider<T>({
  slides,
  renderSlide,
  pagination = false,
  navigationControls = false,
  variant = "full-screen",
  autoplay = false,
  wrapperStyles,
  sliderStyles,
  slideStyles,
}: SliderProps<T>) {
  const id = useId();
  const swiperRef = useRef<SwiperRef | null>(null);
  const { slidesPerView, spaceBetween } = useSliderVariantConfig(
    swiperRef,
    variant
  );

  return (
    <SliderWrapper data-id={id} $wrapperStyles={wrapperStyles}>
      {/* used data-id in order to not to sanitize id and use it directly without
manipulations */}
      {navigationControls && (
        <>
          <HoverableIcon
            className="navigation-button navigation-button-next"
            icon={<img src={chevronRightIcon} alt="Go to next slide" />}
            size={22}
          />
          <HoverableIcon
            className="navigation-button navigation-button-prev"
            icon={<img src={chevronLeftIcon} alt="Go to previous slide" />}
            size={22}
          />
        </>
      )}

      <SwiperStyled
        ref={swiperRef}
        modules={[A11y, EffectFade, Pagination, Navigation, Autoplay]}
        effect={variant === "full-screen" ? "fade" : undefined}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={
          navigationControls
            ? {
                nextEl: `[data-id="${id}"] .navigation-button-next`,
                prevEl: `[data-id="${id}"] .navigation-button-prev`,
                disabledClass: "d-none",
              }
            : undefined
        }
        autoplay={
          autoplay && {
            delay: 5000,
            disableOnInteraction: true,
          }
        }
        onSwiper={(swiper) => console.log(swiper)}
        noSwiping={variant === "full-screen"}
        noSwipingClass="swiper-slide"
        fadeEffect={variant === "full-screen" ? { crossFade: true } : undefined}
        pagination={pagination ? { clickable: true } : undefined}
        $sliderStyles={sliderStyles}
      >
        {slides.map((slide, index) => (
          <SlideStyled
            key={index}
            $slideStyles={slideStyles}
            $variant={variant}
          >
            {renderSlide(slide)}
          </SlideStyled>
        ))}
      </SwiperStyled>
    </SliderWrapper>
  );
}
