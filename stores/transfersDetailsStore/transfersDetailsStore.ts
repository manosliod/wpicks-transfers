import { create } from 'zustand';

interface TransfersDetailsStore {
  transfersDetails: any;
  setTransfersDetails: (data: any) => void;
}

export const useTransfersDetailsStore = create<TransfersDetailsStore>(
  (set) => ({
    transfersDetails: {},
    setTransfersDetails: (data) => set({ transfersDetails: data }),
  })
);
