import { ReactNode } from 'react';
import { safeFetch } from '@/lib/safeFetch';
import {
  useTransfersListStore,
  useTransfersDetailsStore,
} from '@/app/shared/stores/useStore';

interface SsrProps {
  children?: ReactNode;
}

export default async function Ssr({ children }: SsrProps) {
  console.log(process.env.API_BASE_URL);
  const [transfersListData, transfersDetailsData] = await Promise.all([
    safeFetch(process.env.API_BASE_URL + '/api/transfers-list', {
      next: { revalidate: 60 },
    }),
    safeFetch(process.env.API_BASE_URL + '/api/transfers-details', {
      next: { revalidate: 60 },
    }),
  ]);

  const { setTransfersList } = useTransfersListStore();
  const { setTransfersDetails } = useTransfersDetailsStore();

  setTransfersList(transfersListData);
  setTransfersDetails(transfersDetailsData);

  return children;
}
