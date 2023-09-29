import type { RouteMatch } from 'found';
import type { AxiosError } from 'axios';

import authApi from 'core/api/modules/auth/reducer';
import routeNames from 'core/routes/routeNames';

export default async function loadAuth({ context, router }: RouteMatch) {
  const {
    store: { dispatch, getState },
  } = context;

  try {
    const authNotAttempted = authApi.endpoints.getUser.select()(
      getState(),
    ).isUninitialized;

    if (authNotAttempted) {
      await authApi.endpoints.getUser
        .initiate()(dispatch, getState, null)
        .unwrap();
    }
  } catch (_e) {
    const error = _e as AxiosError;

    if (error.status === 401) {
      router.replace({
        pathname: routeNames.login,
      });
    }
  }
}
