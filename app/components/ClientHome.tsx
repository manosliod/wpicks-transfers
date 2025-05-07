'use client';

import '@/lib/i18n';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { usePageStore } from '@/app/shared/stores/pageStore';
import { useMediaQuery } from '@mui/material';
import {
  useTransfersDetailsStore,
  useTransfersListStore,
} from '@/app/shared/stores/useStore';

interface ClientHomeProps {
  transfersListData: any;
  transfersDetailsData: any;
  children?: React.ReactNode;
}

export default function ClientHome({
  transfersListData,
  transfersDetailsData,
  children,
}: ClientHomeProps) {
  const { setIsMobile } = usePageStore();
  const isMobileQuery = useMediaQuery('(max-width: 768px)');

  const { setTransfersList } = useTransfersListStore();
  const { setTransfersDetails } = useTransfersDetailsStore();

  useEffect(() => {
    setIsMobile(isMobileQuery);
    setTransfersList(transfersListData);
    setTransfersDetails(transfersDetailsData);
  }, [
    transfersListData,
    transfersDetailsData,
    isMobileQuery,
    setIsMobile,
    setTransfersList,
    setTransfersDetails,
  ]);

  return <Fragment>{children}</Fragment>;
}
