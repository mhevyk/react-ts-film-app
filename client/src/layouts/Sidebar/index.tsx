import { useMediaQuery } from "@hooks/useMediaQuery";
import { useSidebarStore } from "@store/sidebarStore";
import { media } from "@theme/mediaQueries";
import closeIcon from "@icons/close.svg";
import styled from "styled-components";
import { SidebarMenu } from "./SidebarMenu";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./FadeAnimation.css";

const ANIMATION_DURATION = 400; // TODO: bind animation duration to styles
const ANIMATION_CLASSNAME = "fade";

const CloseIcon = styled.img`
  position: absolute;
  top: 20px;
  right: ${({ theme }) => theme.globals.contentContainerSpacing};
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 100;
  background-color: rgba(${({ theme }) => theme.colors.backgroundRGB}, 0.8);
  width: 100%;

  @media ${media.screens.lg} {
    opacity: 1;
    width: auto;
  }
`;

export const Sidebar = () => {
  const sidebarContainerRef = useRef<HTMLDivElement | null>(null);
  const isLargeScreen = useMediaQuery(media.screens.lg);
  const isSidebarOpen = useSidebarStore((store) => store.isOpen);
  const setIsSidebarOpen = useSidebarStore((store) => store.setIsOpen);

  useEffect(() => {
    setIsSidebarOpen(isLargeScreen);
  }, [isLargeScreen]);

  return (
    <CSSTransition
      in={isSidebarOpen}
      timeout={ANIMATION_DURATION}
      mountOnEnter
      unmountOnExit
      nodeRef={sidebarContainerRef}
      classNames={ANIMATION_CLASSNAME}
    >
      <SidebarContainer ref={sidebarContainerRef}>
        {!isLargeScreen && (
          <CloseIcon src={closeIcon} onClick={() => setIsSidebarOpen(false)} />
        )}
        <SidebarMenu isLargeScreen={isLargeScreen} />
      </SidebarContainer>
    </CSSTransition>
  );
};
