import { Route, makeRouteConfig } from 'found';

import { Core } from 'core/components';

import App from 'screens/App';
import Auth from 'screens/Auth';

import { loadAuth, unauthorizedOnly } from 'utils/auth';

import routeNames from './routeNames';

export const createRouteConfig = () =>
  makeRouteConfig(
    <Route>
      {/* EXAMPLE HOW YOU ARE POSSIBLE TO DO */}

      {/* <Route path='/' Component={Core} getData={loadAuth}>
        <Route
          defer
          path='/login'
          name={routeNames.login}
          render={unauthorizedOnly}
          {...Login}
        />

        <Route defer path='/logout' render={authorizedOnly} {...Logout} />

        <Route defer render={authorizedOnly} {...App}>
          {children}
        </Route>
      </Route> */}

      <Route path='/' Component={Core} getData={loadAuth}>
        <Route
          defer
          path='/login'
          name={routeNames.login}
          render={unauthorizedOnly}
          {...Auth}
        />

        <Route defer {...App} />
      </Route>
    </Route>,
  );
