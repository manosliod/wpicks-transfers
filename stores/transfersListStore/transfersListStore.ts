import {create} from 'zustand';

interface TransfersListStore {
    transfersList: any[];
    setTransfersList: (data: any[]) => void;
}

export const useTransfersListStore = create<TransfersListStore>((set) => ({
    transfersList: [],
    setTransfersList: (data) => set({ transfersList: data }),
}));
