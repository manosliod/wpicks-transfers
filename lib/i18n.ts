import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { fetchCrowdinTranslation } from '@/app/shared/utils/fetchCrowdinTranslation';

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    ns: ['common', 'side_menu', 'transfers', 'guest'],
    defaultNS: 'common',
    backend: {
      request: async (
        options: any,
        url: string,
        payload: any,
        callback: (
          arg0: unknown,
          arg1: { data?: string; status: number }
        ) => void
      ) => {
        const match = url.match(/\/locales\/(.*?)\/(.*?)\.json/);
        const lng = match?.[1];
        const ns = match?.[2];

        try {
          const data = await fetchCrowdinTranslation(lng, ns);
          callback(null, {
            data: JSON.stringify(data),
            status: 200,
          });
        } catch (err) {
          console.error('[Crowdin fetch error]', err);
          callback(err, { status: 500 });
        }
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
