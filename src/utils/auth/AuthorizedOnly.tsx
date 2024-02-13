import { Navigate, Outlet } from 'react-router-dom';

import { api } from 'api/index';

import routes from 'core/routes/routes';

const AuthorizedOnly = () => {
  const { isSuccess: authorized } = api.endpoints.getUser.useQueryState();

  if (!authorized) {
    return <Navigate to={routes.auth} />;
  }

  return <Outlet />;
};

export default AuthorizedOnly;
