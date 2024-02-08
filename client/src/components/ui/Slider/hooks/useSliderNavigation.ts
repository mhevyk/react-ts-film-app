import { useRef } from "react";
import { SliderNavigationControlsRef } from "../components/SliderNavigation";
import { SwiperClass } from "swiper/react";
import { NavigationOptions } from "swiper/types";

export function useSliderNavigation() {
  // use default values for controls, because otherwise it won`t work
  const sliderNavigationControlsRef = useRef<SliderNavigationControlsRef>({
    prevArrow: null,
    nextArrow: null,
  });

  const handleNavigationInit = (swiper: SwiperClass) => {
    if (!swiper.params.navigation) {
      return;
    }

    const navigation: NavigationOptions = {
      prevEl: sliderNavigationControlsRef.current.prevArrow,
      nextEl: sliderNavigationControlsRef.current.nextArrow,
      disabledClass: "d-none",
    };

    swiper.params.navigation = navigation;
    swiper.navigation.init();
    swiper.navigation.update();
  };

  return [sliderNavigationControlsRef, handleNavigationInit] as const;
}
