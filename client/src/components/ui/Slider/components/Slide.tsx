import { SwiperSlide, SwiperSlideProps } from "swiper/react";

export function Slide({ ...props }: SwiperSlideProps) {
  return <SwiperSlide {...props} />;
}

// Needed to work correctly
Slide.displayName = "SwiperSlide";
