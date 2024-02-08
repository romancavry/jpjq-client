import type { RouteMatch } from 'found';

import { api } from 'api/index';
import routeNames from 'core/routes/routeNames';

export default {
  getComponent: () => import('./Auth').then(c => c.default),
  getData: async ({ context, router }: RouteMatch) => {
    const {
      store: { getState },
    } = context;

    const authorized = api.endpoints.getUser.select()(getState()).isSuccess;

    if (authorized) {
      router.replace({
        pathname: routeNames.home,
      });
    }
  },
};
