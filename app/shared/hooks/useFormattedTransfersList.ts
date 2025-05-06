import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { format, isToday, isTomorrow } from 'date-fns';
import { useGroupByDate } from './useGroupByDate';

export function useFormattedTransfersList(transfersListData: any) {
  const { t } = useTranslation();
  // Use the grouping hook to group by date
  const groupedTransfersListData = useGroupByDate(transfersListData);

  return useMemo(() => {
    return Object.entries(groupedTransfersListData).map(([dateKey, items]) => {
      const date = new Date(dateKey);
      let formattedDate: string;

      if (isToday(date)) {
        formattedDate = t('common:today');
      } else if (isTomorrow(date)) {
        formattedDate = t('common:tomorrow');
      } else {
        formattedDate = format(date, 'iiii, d MMMM');
      }

      return { formattedDate, items };
    });
  }, [groupedTransfersListData, t]);
}
