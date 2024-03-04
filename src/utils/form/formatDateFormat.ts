import { isValid, parse } from 'date-fns';

const formatDateFormat = (value: string, dateFormat: string) => {
  if (!value) {
    return value;
  }

  const parsedDate = parse(value, dateFormat, new Date());

  if (isValid(parsedDate)) {
    return parsedDate;
  }

  return value;
};

export default formatDateFormat;
