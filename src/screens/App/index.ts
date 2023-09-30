import type { RouteMatch } from 'found';

import authApi from 'api/modules/auth/reducer';
import routeNames from 'core/routes/routeNames';

import App from './App';

export default {
  Component: App,
  getData: async ({ context, router }: RouteMatch) => {
    const {
      store: { getState },
    } = context;

    const authorized = authApi.endpoints.getUser.select()(getState()).isSuccess;

    if (!authorized) {
      router.replace({
        pathname: routeNames.login,
      });
    }
  },
};
