export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import Loading from '@/app/loading';
import BaseHeader from '@/app/components/BaseHeader';
import BaseLayout from '@/app/components/BaseLayout';
import ClientHome from '@/app/components/ClientHome';
import TransfersList from '@/app/components/transfers-list/TransfersList';

export default async function Home() {
  console.log(process.env.API_BASE_URL);
  const [transfersListRes, transfersDetailsRes] = await Promise.all([
    fetch(process.env.API_BASE_URL + '/api/transfers-list', {
      next: { revalidate: 60 },
    }),
    fetch(process.env.API_BASE_URL + '/api/transfers-details', {
      next: { revalidate: 60 },
    }),
  ]);

  const transfersListData = await transfersListRes.json();
  const transfersDetailsData = await transfersDetailsRes.json();

  return (
    <Suspense fallback={<Loading />}>
      <ClientHome
        transfersListData={transfersListData}
        transfersDetailsData={transfersDetailsData}
      >
        <BaseHeader />
        <BaseLayout>
          <TransfersList />
        </BaseLayout>
      </ClientHome>
    </Suspense>
  );
}
