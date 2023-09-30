import type { BaseApi, ApiOptions, Builder } from 'api/types';

import type { AuthValues } from 'modules/auth/types';

import type { User } from './types';

export const getAuthEndpoints = (
  builder: Builder,
  // eslint-disable-next-line no-unused-vars
  _options: ApiOptions,
  // eslint-disable-next-line no-unused-vars
  _api: BaseApi,
) => ({
  register: builder.mutation<void, AuthValues>({
    query: data => ({
      host: 'http://127.0.0.1:1337',
      path: '/auth/register',
      method: 'POST',
      data,
    }),
  }),

  login: builder.mutation<void, AuthValues>({
    query: data => ({
      host: 'http://127.0.0.1:1337',
      path: '/auth/login',
      method: 'POST',
      data,
    }),
  }),

  logout: builder.query<void, void>({
    query: () => ({
      host: 'http://127.0.0.1:1337',
      path: '/auth/logout',
      method: 'GET',
    }),
  }),

  getUser: builder.query<User, void>({
    query: () => ({
      host: 'http://127.0.0.1:1337',
      path: '/auth/user',
      method: 'GET',
    }),
  }),

  // changeCurrentUser: builder.mutation<User, Partial<User>>({
  //   query: data => ({
  //     method: 'PATCH',
  //     path: '/realms/:realmId/user',
  //     data,
  //   }),
  //   onQueryStarted(_, { dispatch, queryFulfilled }) {
  //     queryFulfilled.then(({ data }) => {
  //       // update current user entity
  //       dispatch(api.util.updateQueryData('getUser', undefined, () => data));

  //       // update public user entity
  //       dispatch(
  //         api.util.updateQueryData('getPublicUser', data.id, () => data),
  //       );
  //     });
  //   },
  // }),
});
