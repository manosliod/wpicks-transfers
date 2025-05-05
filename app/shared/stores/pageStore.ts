import { create } from 'zustand';

interface PageState {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

export const usePageStore = create<PageState>((set) => ({
  isMobile: false,
  setIsMobile: (isMobile) => set({ isMobile }),
}));
