'use client';

import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';
import { useFormattedTransfersList } from '@/app/shared/hooks/useHooks';
import {
  useTransfersListStore,
  useTransfersDetailsStore,
} from '@/app/shared/stores/useStore';
import TransfersListTable from '@/app/components/transfers-list/TransfersListTable';

interface TransfersListProps {
  transfersListData: any;
  transfersDetailsData: any;
}

export default function TransfersList({
  transfersListData,
  transfersDetailsData,
}: TransfersListProps) {
  const { t } = useTranslation();

  const setTransfersList = useTransfersListStore(
    (state) => state.setTransfersList
  );
  const setTransfersDetails = useTransfersDetailsStore(
    (state) => state.setTransfersDetails
  );

  const formattedTransfersList = useFormattedTransfersList(transfersListData);
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
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {t('common:transfer.plural')}
      </Typography>
      {/*@ts-ignore*/}
      <TransfersListTable formattedTransfersList={formattedTransfersList} />
    </>
  );
}
