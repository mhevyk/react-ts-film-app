import { ComponentPropsWithoutRef, ReactNode } from "react";
import { RuleSet } from "styled-components";
import { Swiper } from "swiper/react";

type SliderSkeletonProps = {
  show?: boolean;
  renderSkeleton?: () => ReactNode;
};

export type SliderVariant = "full-screen" | "small" | "medium";

type SliderStylingProps<TSlide> = {
  wrapperStyles?: RuleSet;
  sliderStyles?: RuleSet;
  slideStyles?: RuleSet | ((slide: TSlide) => RuleSet);
};

type SliderModuleProps = {
  autoplay?: boolean;
  pagination?: boolean;
  navigationControls?: boolean;
};

export type SliderProps<TSlide> = {
  slides: TSlide[];
  renderSlide: (slide: TSlide) => ReactNode;
  variant?: SliderVariant;
  skeleton?: SliderSkeletonProps;
} & SliderModuleProps &
  SliderStylingProps<TSlide> &
  ComponentPropsWithoutRef<typeof Swiper>;
