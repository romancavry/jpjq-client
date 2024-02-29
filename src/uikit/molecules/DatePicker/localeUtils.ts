import type { Locale } from 'date-fns';
import { enGB, ru } from 'date-fns/locale';

import type { LocalesType } from './DatePicker';

export const getDateFnsLocale = (locale: LocalesType): Locale => {
  switch (locale) {
    case 'en':
      return enGB;
    case 'ru':
    default:
      return ru;
  }
};
