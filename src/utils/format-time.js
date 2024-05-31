import { vi } from 'date-fns/locale';
import { format, getTime, parseISO, formatDistanceToNow } from 'date-fns';
// ----------------------------------------------------------------------

export function fDate(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function fMinute(date) {
  const dateNow = parseISO(date);
  const result = formatDistanceToNow(dateNow, { addSuffix: true, locale: vi });
  return result;
}
