import { format, isToday, isTomorrow, parseISO } from 'date-fns';

export function formatArrivalDepartureDate(
  datetime: string | undefined,
  t: (key: string) => string
) {
  if (!datetime) return;

  const date = parseISO(datetime);

  if (isToday(date)) {
    return `${t('common:common.today')}, ${format(date, 'd MMMM, HH:mm')}`;
  }

  if (isTomorrow(date)) {
    return `${t('common:common.tomorrow')}, ${format(date, 'd MMMM, HH:mm')}`;
  }

  return format(date, 'iii, d MMMM');
}
