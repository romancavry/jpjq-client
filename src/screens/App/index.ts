import type { RouteMatch } from 'found';

import { api } from 'api/index';
import routeNames from 'core/routes/routeNames';

import App from './App';

export default {
  Component: App,
  getData: async ({ context, router }: RouteMatch) => {
    const {
      store: { getState },
    } = context;

    const authorized = api.endpoints.getUser.select()(getState()).isSuccess;

    if (!authorized) {
      router.replace({
        pathname: routeNames.login,
      });
    }
  },
};
