import { Navigate, Outlet } from 'react-router-dom';

import { api } from 'api/index';

import routes from 'core/routes/routes';

const UnauthorizedOnly = () => {
  const { isSuccess: authorized } = api.useGetUserQuery();

  if (authorized) {
    return <Navigate to={routes.my} />;
  }

  return <Outlet />;
};

export default UnauthorizedOnly;
