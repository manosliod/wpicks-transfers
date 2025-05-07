import { create } from 'zustand';
import type { TransferItem } from '@/app/components/transfers-list/TransfersListTableBody';

interface CarouselModalState {
  open: boolean;
  currentIndex: number;
  setOpen: (open: boolean) => void;
  setCurrentIndex: (index: number | ((prev: number) => number)) => void;
  handleOpen: (index: number) => void;
  handleOpenById: (id: number | string, items: TransferItem[]) => void;
}

export const useCarouselModalStore = create<CarouselModalState>((set) => ({
  open: false,
  currentIndex: 0,
  setOpen: (open) =>
    set((state) => {
      if (state.open === open) return state;
      return { open };
    }),
  setCurrentIndex: (index) =>
    typeof index === 'function'
      ? set((state) => ({ currentIndex: index(state.currentIndex) }))
      : set({ currentIndex: index }),
  handleOpen: (index) =>
    set({
      currentIndex: index,
      open: true,
    }),
  handleOpenById: (id, items) => {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      set({
        currentIndex: index,
        open: true,
      });
    }
  },
}));
