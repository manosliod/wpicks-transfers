import BaseHeader from '@/app/components/BaseHeader';
import BaseLayout from '@/app/components/BaseLayout';
import ClientHome from '@/app/components/ClientHome';

export default async function Home() {
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
    <>
      <BaseHeader />
      <BaseLayout>
        <ClientHome
          transfersListData={transfersListData}
          transfersDetailsData={transfersDetailsData}
        />
      </BaseLayout>
    </>
  );
}
