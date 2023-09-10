import type { BaseApi, ApiOptions, Builder } from '../../types';
import type { User } from './types';

export const getAuthEndpoints = (
  builder: Builder,
  options: ApiOptions,
  api: BaseApi,
) => ({
  login: builder.mutation<void, Partial<User>>({
    query: data => ({
      path: '/login',
      method: 'POST',
      data,
    }),
  }),

  getUser: builder.query<User, void>({
    query: () => ({
      method: 'GET',
      path: '/user',
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
