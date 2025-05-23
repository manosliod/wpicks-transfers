'use client';

import { Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';
import { useGroupByDate } from '@/app/shared/hooks/useHooks';
import {
  useTransfersListStore,
  useTransfersDetailsStore,
  usePageStore,
} from '@/app/shared/stores/useStore';
import TransfersListTable from '@/app/components/transfers-list/TransfersListTable';
import TransfersListMobile from '@/app/components/transfers-list/TransfersListMobile';
import CarouselModal from '@/app/components/transfers-list/CarouselModal';
import BottomSheet from '@/app/components/transfers-list/BottomSheet';
import TransfersListPagination from '@/app/components/transfers-list/TransfersListPagination';

export default function TransfersList() {
  const { t } = useTranslation();
  const { isMobile } = usePageStore();
  const { transfersList } = useTransfersListStore();
  const { transfersDetails } = useTransfersDetailsStore();

  const groupedTransfersList = useGroupByDate(transfersList);

  return (
    <Fragment>
      {!isMobile && (
        <Fragment>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {t('common:transfer.plural')}
          </Typography>
          <TransfersListTable transfersList={groupedTransfersList} />
          <CarouselModal
            transfersList={groupedTransfersList}
            transfersDetails={transfersDetails}
          />
        </Fragment>
      )}
      {isMobile && (
        <Fragment>
          <TransfersListMobile transfersList={groupedTransfersList} />
          <BottomSheet />
        </Fragment>
      )}
      <TransfersListPagination />
    </Fragment>
  );
}
