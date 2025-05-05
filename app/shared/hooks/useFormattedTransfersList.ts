import { useMemo } from 'react';
import { format, isToday, isTomorrow } from 'date-fns';
import { useGroupByDate } from './useGroupByDate'; // Import the other hook

export function useFormattedTransfersList(transfersListData: any) {
  // Use the grouping hook to group by date
  const groupedTransfersListData = useGroupByDate(transfersListData);

  return useMemo(() => {
    return Object.entries(groupedTransfersListData).map(([dateKey, items]) => {
      const date = new Date(dateKey);
      let formattedDate: string;

      if (isToday(date)) {
        formattedDate = 'Today';
      } else if (isTomorrow(date)) {
        formattedDate = 'Tomorrow';
      } else {
        formattedDate = format(date, 'iiii, d MMMM'); // Format as 'Monday, 5 May'
      }

      return { formattedDate, items };
    });
  }, [groupedTransfersListData]);
}
