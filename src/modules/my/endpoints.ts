// import { api } from 'api/index';
import type { ApiOptions, BaseApi, Builder } from 'api/types';

import type { EnteringValues } from './types';

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
    // onQueryStarted(_, { dispatch, queryFulfilled }) {
    //   queryFulfilled.then(({ data }) => {
    //     // Update current user
    //     dispatch(
    //       api.util.upsertQueryData(
    //         'getUser',
    //         undefined,
    //         data as unknown as User,
    //       ),
    //     );
    //   });
    // },
  }),
});
