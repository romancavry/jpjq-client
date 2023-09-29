import type { RouteMatch } from 'found';

import authApi from 'core/api/modules/auth/reducer';
import routeNames from 'core/routes/routeNames';

export default {
  getComponent: () => import('./Auth').then(c => c.default),
  getData: async ({ context, router }: RouteMatch) => {
    const {
      store: { getState },
    } = context;

    const authorized = authApi.endpoints.getUser.select()(getState()).isSuccess;

    if (authorized) {
      router.replace({
        pathname: routeNames.home,
      });
    }
  },
};
