import { useRef } from "react";
import { SliderNavigationControlsRef } from "../components/SliderNavigation";

export function useSliderNavigation() {
  // use default values for controls, because otherwise it won`t work
  return useRef<SliderNavigationControlsRef>({
    prevArrow: null,
    nextArrow: null,
  });
}
