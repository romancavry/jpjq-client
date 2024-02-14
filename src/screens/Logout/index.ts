import { redirect } from 'react-router-dom';
import type { ErrorResponse, RouteProps } from 'react-router-dom';

import { api } from 'api/index';
import { store } from 'api/store';

import routes from 'core/routes/routes';

import { getRenderError } from 'utils/errorUtils';

export default {
  loader: async () => {
    try {
      const { dispatch, getState } = store;

      await api.endpoints.logout.initiate()(dispatch, getState, null).unwrap();

      return redirect(routes.home);
    } catch (error) {
      getRenderError(error as ErrorResponse);

      return null;
    }
  },
} as RouteProps;
