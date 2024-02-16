import type { ErrorResponse, PathRouteProps } from 'react-router-dom';
import { redirect } from 'react-router-dom';

import { api } from 'api/index';
import { store } from 'api/store';

import { AUTH_TYPES, buildAuthPath } from 'modules/auth';

import { getRenderError } from 'utils/errorUtils';

export default {
  loader: async () => {
    try {
      const { dispatch, getState } = store;

      await api.endpoints.logout.initiate()(dispatch, getState, null).unwrap();

      return redirect(buildAuthPath({ type: AUTH_TYPES.LOGIN }));
    } catch (error) {
      getRenderError(error as ErrorResponse);

      return null;
    }
  },
} as PathRouteProps;
