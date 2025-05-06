'use client';

import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';
import { useFormattedTransfersList } from '@/app/shared/hooks/useHooks';
import {
  useTransfersListStore,
  useTransfersDetailsStore,
} from '@/app/shared/stores/useStore';
import TransfersListTable from '@/app/components/transfers-list/TransfersListTable';

export default function TransfersList() {
  const { t } = useTranslation();
  const { transfersList } = useTransfersListStore();
  const { transfersDetails } = useTransfersDetailsStore();

  const formattedTransfersList = useFormattedTransfersList(transfersList);

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
