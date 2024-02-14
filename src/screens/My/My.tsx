import * as React from 'react';
import { Outlet } from 'react-router-dom';

import routes from 'core/routes/routes';

import { User } from 'assets/icons/20';

import type { NagivationItem } from './components/Navigation/Navigation';
import { Header, Navigation } from './components';

import { Wrapper } from './styled';

const My = () => {
  const navItems: NagivationItem[] = React.useMemo(
    () => [
      {
        id: 'accounting',
        to: routes.accounting,
        icon: User,
        title: 'Учет',
      },
      {
        id: 'stock',
        to: routes.stock,
        icon: User,
        title: 'Котировки',
      },
    ],
    [],
  );

  return (
    <Wrapper>
      <Header />

      <Outlet />

      <Navigation items={navItems} />
    </Wrapper>
  );
};

export default My;
