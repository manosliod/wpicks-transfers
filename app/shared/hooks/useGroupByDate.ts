import { useMemo } from 'react';

// Helper function to format dates into a timestamp (for grouping)
const getDateKey = (datetime: string) => {
  const date = new Date(datetime);
  // Return the timestamp of the start of the day (midnight)
  return new Date(date.setHours(0, 0, 0, 0)).toISOString();
};

export const useGroupByDate = (data: { datetime: string }[]) => {
  return useMemo(() => {
    const grouped: Record<string, { datetime: string }[]> = {};

    // Group data by date key
    data.forEach((item) => {
      const dateKey = getDateKey(item.datetime);

      // If the group for this date doesn't exist, create it
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

      // Push the item to the corresponding group
      grouped[dateKey].push(item);
    });

    // Sort the grouped keys in ascending order by date
    return Object.keys(grouped)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime()) // Compare timestamps
      .reduce(
        (acc, key) => {
          acc[key] = grouped[key];
          return acc;
        },
        {} as Record<string, { datetime: string }[]>
      );
  }, [data]);
};
