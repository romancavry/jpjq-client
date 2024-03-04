import type { ApiOptions, BaseApi, Builder } from 'api/types';

import type { Currency } from './types';

export const getCryptoEndpoints = (
  builder: Builder,
  // eslint-disable-next-line no-unused-vars
  _options: ApiOptions,
  // eslint-disable-next-line no-unused-vars
  _api: BaseApi,
) => ({
  getCryptoCurrencies: builder.query<{ data: Record<string, Currency> }, void>({
    query: () => ({
      host: import.meta.env.VITE_API_URL,
      path: '/crypto/currencies',
      method: 'GET',
    }),
  }),
});
