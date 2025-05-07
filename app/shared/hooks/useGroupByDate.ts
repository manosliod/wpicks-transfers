import { useMemo } from 'react';
import { format, isToday, isTomorrow } from 'date-fns';
import { useTranslation } from 'next-i18next';

import type {
  TransferItem,
  FormattedTransfers,
} from '@/app/components/transfers-list/TransfersListTableBody';

const getDateKey = (datetime: string) => {
  const date = new Date(datetime);
  return new Date(date.setHours(0, 0, 0, 0)).toISOString();
};

export const useGroupByDate = (data: TransferItem[]) => {
  const { t } = useTranslation();

  return useMemo(() => {
    const grouped: Record<string, TransferItem[]> = {};

    data.forEach((item) => {
      const dateKey = getDateKey(item.datetime);

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

      grouped[dateKey].push(item);
    });

    const sortedGroups: FormattedTransfers[] = Object.keys(grouped)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .map((dateKey) => {
        const date = new Date(dateKey);
        let formattedDate: string;

        if (isToday(date)) {
          formattedDate = t('common:today');
        } else if (isTomorrow(date)) {
          formattedDate = t('common:tomorrow');
        } else {
          formattedDate = format(date, 'iiii, d MMMM');
        }

        return {
          formattedDate,
          transfers: grouped[dateKey],
        };
      });

    return sortedGroups;
  }, [data, t]);
};
