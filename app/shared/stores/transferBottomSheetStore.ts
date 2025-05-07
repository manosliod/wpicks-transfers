import { create } from 'zustand';
import type { TransferItem } from '@/app/components/transfers-list/TransfersListTableBody';
import type { TransferDetailsItem } from '@/app/shared/types/transferDetails';

interface TransferBottomSheetState {
  open: boolean;
  transfer: TransferItem | null | undefined;
  transferDetails: TransferDetailsItem | null | undefined;
  openSheet: (
    transfer: TransferItem,
    transferDetails: TransferDetailsItem
  ) => void;
  closeSheet: () => void;
}

export const useTransferBottomSheetStore = create<TransferBottomSheetState>(
  (set) => ({
    open: false,
    transfer: null,
    transferDetails: null,

    openSheet: (transfer, transferDetails) =>
      set((state) => {
        if (
          state.open === true &&
          state.transfer === transfer &&
          state.transferDetails === transferDetails
        ) {
          return state;
        }
        return {
          open: true,
          transfer,
          transferDetails,
        };
      }),

    closeSheet: () =>
      set((state) => {
        if (
          state.open === false &&
          state.transfer === null &&
          state.transferDetails === null
        ) {
          return state;
        }
        return {
          open: false,
          transfer: null,
          transferDetails: null,
        };
      }),
  })
);
