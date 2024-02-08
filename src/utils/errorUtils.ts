import { HttpError } from 'found';
import type { AxiosError } from 'axios';

export const ERROR_CODES = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
};

export const getError = (err: any) => {
  const { code } = err.data;
  let msg = null;

  switch (code) {
    case ERROR_CODES.INVALID_CREDENTIALS:
      msg = 'Неверные данные для входа.';
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
