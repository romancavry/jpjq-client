import type { ErrorResponse, RouteProps } from 'react-router-dom';

import { api } from 'api/index';
import { store } from 'api/store';

import { getRenderError } from 'utils/errorUtils';

export default {
  loader: async () => {
    try {
      const { dispatch, getState } = store;

      await api.endpoints.logout.initiate()(dispatch, getState, null).unwrap();

      return null;
    } catch (error) {
      getRenderError(error as ErrorResponse);

      return null;
    }
  },
} as RouteProps;
