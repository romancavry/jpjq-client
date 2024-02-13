import { createApi as createRtkApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';
import { getAuthEndpoints } from '../modules';
import { TAG_TYPES } from './constants';

import type { ApiOptions, BaseApi } from './types';

// TODO: сделать эту функцию только функцией создания api
export const createApi = (options: ApiOptions) => {
  const { reducerPath } = options;

  const api = createRtkApi({
    reducerPath,
    baseQuery: customBaseQuery(),
    // TODO: tag types
    tagTypes: Object.values(TAG_TYPES),
    endpoints: () => ({}),
  });

  return api.injectEndpoints({
    endpoints: builder => ({
      // auth
      ...getAuthEndpoints(builder, options, api as BaseApi),
    }),
  });
};

export type Api = ReturnType<typeof createApi>;
