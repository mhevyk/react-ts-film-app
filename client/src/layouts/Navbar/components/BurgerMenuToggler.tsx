import { useMediaQuery } from "@hooks/useMediaQuery";
import { IconButton } from "@components/ui/IconButton";
import burgerMenuIcon from "@icons/menu.svg";
import { useState } from "react";
import { SmallScreenSidebar } from "./SmallScreenSidebar";

export function BurgerMenuToggler() {
  const isLargeScreen = useMediaQuery((media) => media.screens.lg);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  if (isLargeScreen) {
    return null;
  }

  return (
    <>
      <IconButton
        icon={<img src={burgerMenuIcon} alt="Burger menu icon" />}
        onClick={() => setIsMobileSidebarOpen(true)}
      />
      <SmallScreenSidebar
        isOpen={isMobileSidebarOpen}
        handleClose={() => setIsMobileSidebarOpen(false)}
      />
    </>
  );
}
