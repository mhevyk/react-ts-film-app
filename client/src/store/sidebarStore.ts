import { checkMediaQueryMatches } from "@hooks/useMediaQuery";
import { media } from "@theme/mediaQueries";
import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  toggle: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: checkMediaQueryMatches(media.screens.lg),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
