import { SwiperSlide, SwiperSlideProps } from "swiper/react";

export type SlideProps = SwiperSlideProps;

export function Slide(props: SlideProps) {
  return <SwiperSlide {...props} />;
}

// Needed to work correctly
Slide.displayName = "SwiperSlide";
