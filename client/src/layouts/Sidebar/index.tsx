import { useMediaQuery } from "@hooks/useMediaQuery";
import { useSidebarStore } from "@store/sidebarStore";
import { media } from "@theme/mediaQueries";
import closeIcon from "@icons/close.svg";
import styled, { useTheme } from "styled-components";
import { SidebarMenu } from "./SidebarMenu";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./FadeAnimation.css";

const CloseIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 5%;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SidebarContainer = styled.aside<{ $isLargeScreen: boolean }>`
  --duration: ${(props) => props.theme.animations.fade.duration}ms;

  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 100;
  background-color: ${(props) =>
    props.theme.colors.backgroundWithOpacity(props.$isLargeScreen ? 0.8 : 1)};
  width: 100%;

  @media ${media.screens.lg} {
    opacity: 1;
    width: auto;
  }
`;

function useLockPageScroll(
  condition: boolean,
  className: string = "lock-scroll"
) {
  useEffect(() => {
    if (condition) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }

    return () => {
      document.body.classList.remove(className);
    };
  }, [condition, className]);
}

export const Sidebar = () => {
  const sidebarContainerRef = useRef<HTMLDivElement | null>(null);
  const isLargeScreen = useMediaQuery(media.screens.lg);
  const isSidebarOpen = useSidebarStore((store) => store.isOpen);
  const setIsSidebarOpen = useSidebarStore((store) => store.setIsOpen);
  const { animations } = useTheme();

  // this makes sure sidebar is always open on large devices and closed by default on small devices
  useEffect(() => {
    setIsSidebarOpen(isLargeScreen);
  }, [isLargeScreen, setIsSidebarOpen]);

  useLockPageScroll(!isLargeScreen && isSidebarOpen);

  return (
    <CSSTransition
      in={isSidebarOpen}
      timeout={animations.fade.duration}
      mountOnEnter
      unmountOnExit
      nodeRef={sidebarContainerRef}
      classNames={animations.fade.name}
    >
      <SidebarContainer
        ref={sidebarContainerRef}
        $isLargeScreen={isLargeScreen}
      >
        {!isLargeScreen && (
          <CloseIcon src={closeIcon} onClick={() => setIsSidebarOpen(false)} />
        )}
        <SidebarMenu isLargeScreen={isLargeScreen} />
      </SidebarContainer>
    </CSSTransition>
  );
};
