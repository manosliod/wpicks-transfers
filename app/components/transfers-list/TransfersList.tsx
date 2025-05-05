'use client';

import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import {
  useTransfersListStore,
  useTransfersDetailsStore,
} from '@/app/shared/stores/useStore';

interface TransfersListProps {
  transfersListData: any;
  transfersDetailsData: any;
}

export default function TransfersList({
  transfersListData,
  transfersDetailsData,
}: TransfersListProps) {
  const { t } = useTranslation(['common', 'guest']);

  const setTransfersList = useTransfersListStore(
    (state) => state.setTransfersList
  );
  const setTransfersDetails = useTransfersDetailsStore(
    (state) => state.setTransfersDetails
  );

  useEffect(() => {
    setTransfersList(transfersListData);
    setTransfersDetails(transfersDetailsData);
  }, [
    transfersListData,
    transfersDetailsData,
    setTransfersList,
    setTransfersDetails,
  ]);

  return (
    <>
      <div>
        <h1>{t('common.transfer.plural')}</h1>
      </div>
    </>
  );
}
