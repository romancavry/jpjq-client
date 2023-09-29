import { RouteMatch } from 'found';

import authApi from 'core/api/modules/auth/reducer';
import routeNames from 'core/routes/routeNames';

export default {
  getData: async ({ context, router }: RouteMatch) => {
    const {
      store: { dispatch, getState },
    } = context;

    const authorized = authApi.endpoints.getUser.select()(getState()).isSuccess;

    if (authorized) {
      await authApi.endpoints.logout.initiate()(dispatch, getState, null);
    }

    router.replace({
      pathname: routeNames.login,
    });
  },
};
