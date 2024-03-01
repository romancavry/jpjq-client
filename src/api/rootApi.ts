import { getAuthEndpoints } from '../modules/auth';
import { getMyEndpoints } from '../modules/my';

import { createApi } from './createApi';
import type { ApiOptions, BaseApi } from './types';

const options: ApiOptions = { reducerPath: 'rootApi' };

const rootApi = createApi(options);

export default rootApi.injectEndpoints({
  endpoints: builder => ({
    ...getAuthEndpoints(builder, options, rootApi as unknown as BaseApi),
    ...getMyEndpoints(builder, options, rootApi as unknown as BaseApi),
  }),
});
