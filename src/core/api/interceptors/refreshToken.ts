import { AxiosError, Axios } from 'axios';

type RefreshTokenOptions = {
  error: AxiosError;
  basePath?: string;
  host?: string;
  axiosInstance: Axios;
};

const refreshToken = async ({ error, axiosInstance }: RefreshTokenOptions) => {
  if (error.config && error.response && error.response.status === 401) {
    try {
      // ....
      // bug in axios https://github.com/axios/axios/issues/5143
      // @ts-ignore
      // originalConfig!.headers = { ...originalConfig!.headers };
      // return axiosInstance.request(originalConfig);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  return Promise.reject(error);
};

export default refreshToken;
