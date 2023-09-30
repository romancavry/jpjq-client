import { HttpError } from 'found';
import type { AxiosError } from 'axios';

export const ERROR_CODES = {
  NOT_FOUND: 'not_found',
};

export const getError = (err: any) => {
  const { code } = err;
  let msg = null;

  switch (code) {
    case ERROR_CODES.NOT_FOUND:
      msg = 'Не найдено.';
      break;
    default:
      console.log(err); // eslint-disable-line
      msg = 'Произошла ошибка, попробуйте позже.';
      break;
  }

  return {
    msg,
  };
};

export const getRenderError = (err: AxiosError) => {
  if (err?.response?.status && ![401, 409].includes(err?.response?.status)) {
    throw new HttpError(err.response.status);
  }
};
