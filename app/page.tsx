export const dynamic = 'auto';

import Ssr from '@/app/components/Ssr';
import BaseHeader from '@/app/components/BaseHeader';
import BaseLayout from '@/app/components/BaseLayout';
import ClientHome from '@/app/components/ClientHome';
import TransfersList from '@/app/components/transfers-list/TransfersList';

export default async function Home() {
  return (
    <Ssr>
      <ClientHome>
        <BaseHeader />
        <BaseLayout>
          <TransfersList />
        </BaseLayout>
      </ClientHome>
    </Ssr>
  );
}
