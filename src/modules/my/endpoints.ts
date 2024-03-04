import { TAG_TYPES } from 'api/constants';
import type { ApiOptions, BaseApi, Builder } from 'api/types';

import type { EnteringValues, Transaction } from './types';

export const getMyEndpoints = (
  builder: Builder,
  // eslint-disable-next-line no-unused-vars
  _options: ApiOptions,
  // eslint-disable-next-line no-unused-vars
  _api: BaseApi,
) => ({
  createTransaction: builder.mutation<void, EnteringValues>({
    query: data => ({
      host: import.meta.env.VITE_API_URL,
      path: '/accounting/create',
      method: 'POST',
      data,
      noParseData: true,
    }),
    invalidatesTags: [TAG_TYPES.TRANSACTIONS],
  }),

  getTransactions: builder.query<{ data: Transaction[] }, void>({
    query: () => ({
      host: import.meta.env.VITE_API_URL,
      path: '/accounting',
      method: 'GET',
    }),
    providesTags: [TAG_TYPES.TRANSACTIONS],
  }),
});
