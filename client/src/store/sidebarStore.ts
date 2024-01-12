import { checkMediaQueryMatches } from "@hooks/useMediaQuery";
import { media } from "@theme/mediaQueries";
import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: checkMediaQueryMatches(media.screens.lg),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
