import { useMediaQuery } from "@hooks/useMediaQuery";
import { useSidebarStore } from "@store/sidebarStore";
import { media } from "@theme/mediaQueries";
import { useEffect } from "react";
import { LargeScreenSidebar } from "./LargeScreenSidebar";
import { SmallScreenSidebar } from "./SmallScreenSidebar";

export const Sidebar = () => {
  const isLargeScreen = useMediaQuery(media.screens.lg);
  const setIsSidebarOpen = useSidebarStore((store) => store.setIsOpen);

  // this makes sure sidebar is always open on large devices and closed by default on small devices
  useEffect(() => {
    setIsSidebarOpen(isLargeScreen);
  }, [isLargeScreen, setIsSidebarOpen]);

  if (isLargeScreen) {
    return <LargeScreenSidebar />;
  }

  return <SmallScreenSidebar />;
};
