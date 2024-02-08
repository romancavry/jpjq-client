import { RouteMatch } from 'found';

import { api } from 'api/index';
import routeNames from 'core/routes/routeNames';

export default {
  getData: async ({ context, router }: RouteMatch) => {
    const {
      store: { dispatch, getState },
    } = context;

    const authorized = api.endpoints.getUser.select()(getState()).isSuccess;

    if (authorized) {
      await api.endpoints.logout.initiate()(dispatch, getState, null);
    }

    router.replace({
      pathname: routeNames.login,
    });
  },
};
