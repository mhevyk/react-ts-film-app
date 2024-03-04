import { useMediaQuery } from "@hooks/useMediaQuery";
import { IconButton } from "@components/ui/IconButton";
import BurgerMenuIcon from "@icons/menu.svg?react";
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
        icon={<BurgerMenuIcon color="white" />}
        onClick={() => setIsMobileSidebarOpen(true)}
      />
      <SmallScreenSidebar
        isOpen={isMobileSidebarOpen}
        handleClose={() => setIsMobileSidebarOpen(false)}
      />
    </>
  );
}
