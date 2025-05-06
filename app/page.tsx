import { safeFetch } from '@/lib/safeFetch';

export const dynamic = 'force-dynamic';

import BaseHeader from '@/app/components/BaseHeader';
import BaseLayout from '@/app/components/BaseLayout';
import ClientHome from '@/app/components/ClientHome';
import TransfersList from '@/app/components/transfers-list/TransfersList';

export default async function Home() {
  console.log(process.env.API_BASE_URL);
  const [transfersListData, transfersDetailsData] = await Promise.all([
    safeFetch(process.env.API_BASE_URL + '/api/transfers-list', {
      next: { revalidate: 60 },
    }),
    safeFetch(process.env.API_BASE_URL + '/api/transfers-details', {
      next: { revalidate: 60 },
    }),
  ]);

  return (
    <>
      <ClientHome>
        <BaseHeader />
        <BaseLayout>
          <TransfersList
            transfersListData={transfersListData}
            transfersDetailsData={transfersDetailsData}
          />
        </BaseLayout>
      </ClientHome>
    </>
  );
}
