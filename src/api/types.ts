import type { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import type { Api as RtkApi } from '@reduxjs/toolkit/query';

import { TAG_TYPES } from './constants';
import type { RequestError } from './customBaseQuery';
import { customBaseQuery } from './customBaseQuery';

export type { RequestError };

export type ApiOptions = {
  reducerPath: string;
};

export type TagTypes = (typeof TAG_TYPES)[keyof typeof TAG_TYPES];

export type CustomBaseQueryFn = ReturnType<typeof customBaseQuery>;

export type BaseApi = RtkApi<CustomBaseQueryFn, any, string, TagTypes>;

export type Builder = EndpointBuilder<CustomBaseQueryFn, TagTypes, string>;
