import { format, isValid } from 'date-fns';

const parseDateFormat = (value: string, dateFormat: string) => {
  const date = value && new Date(value);

  if (isValid(date)) {
    return format(date, dateFormat);
  }

  return value;
};

export default parseDateFormat;
