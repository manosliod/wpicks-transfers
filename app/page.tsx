import styles from './page.module.css';
import ClientHome from '@/app/components/ClientHome';

export default async function Home() {

  const [transfersListRes, transfersDetailsRes] = await Promise.all([
    fetch(process.env.API_BASE_URL + '/api/transfers-list', { next: { revalidate: 60 } }),
    fetch(process.env.API_BASE_URL + '/api/transfers-details', { next: { revalidate: 60 } }),
  ]);

  const transfersListData = await transfersListRes.json();
  const transfersDetailsData = await transfersDetailsRes.json();

  return (
      <div className={styles.page}>
        <ClientHome
            transfersListData={transfersListData}
            transfersDetailsData={transfersDetailsData}
        />
      </div>
  );
}
