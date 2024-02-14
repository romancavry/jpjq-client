import { Navigate, Outlet } from 'react-router-dom';

import { AUTH_TYPES, buildAuthPath } from 'modules/auth';
import { useAuth } from 'modules/auth/hooks';

const AuthorizedOnly = () => {
  const { data } = useAuth();

  if (!data) {
    return <Navigate to={buildAuthPath({ type: AUTH_TYPES.LOGIN })} />;
  }

  return <Outlet />;
};

export default AuthorizedOnly;
