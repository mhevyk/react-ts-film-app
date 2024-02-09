import chevronLeftIcon from "@icons/chevron-left.svg";
import { IconButton } from "@components/ui/IconButton";
import styled from "styled-components";
import { ElementRef, forwardRef, useImperativeHandle, useRef } from "react";
import { ChevronRightIcon } from "@components/styled/ChevronRightIcon";

const NavigationArrow = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
`;

const PrevArrow = styled(NavigationArrow)`
  left: ${(props) => props.theme.globals.sliderSpacing}px;
`;

const NextArrow = styled(NavigationArrow)`
  right: ${(props) => props.theme.globals.sliderSpacing}px;
`;

type PrevArrowRef = ElementRef<typeof PrevArrow> | null;
type NextArrowRef = ElementRef<typeof NextArrow> | null;

export type SliderNavigationControlsRef = {
  prevArrow: PrevArrowRef;
  nextArrow: NextArrowRef;
};

export const SliderNavigation = forwardRef<SliderNavigationControlsRef>(
  (_, ref) => {
    const prevArrowRef = useRef<PrevArrowRef>(null);
    const nextArrowLeft = useRef<NextArrowRef>(null);

    // use this hook to compose two refs into one external ref
    useImperativeHandle(ref, () => ({
      prevArrow: prevArrowRef.current,
      nextArrow: nextArrowLeft.current,
    }));

    return (
      <>
        <PrevArrow
          icon={<img src={chevronLeftIcon} alt="Go to previous slide" />}
          size={22}
          ref={prevArrowRef}
        />
        <NextArrow icon={<ChevronRightIcon />} size={22} ref={nextArrowLeft} />
      </>
    );
  }
);
