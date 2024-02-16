import { createApi as createRtkApi } from '@reduxjs/toolkit/query/react';

import { TAG_TYPES } from './constants';
import { customBaseQuery } from './customBaseQuery';
import type { ApiOptions } from './types';

export const createApi = (options: ApiOptions) => {
  const { reducerPath } = options;

  return createRtkApi({
    reducerPath,
    baseQuery: customBaseQuery(),
    tagTypes: Object.values(TAG_TYPES),
    endpoints: () => ({}),
  });
};

export type Api = ReturnType<typeof createApi>;
