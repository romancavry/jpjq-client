import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'modules/auth/hooks';
import { DEFAULT_MY_PAGE_ROUTE } from 'modules/common';

const UnauthorizedOnly = () => {
  const { data } = useAuth();

  if (data) {
    return <Navigate to={DEFAULT_MY_PAGE_ROUTE} />;
  }

  return <Outlet />;
};

export default UnauthorizedOnly;
