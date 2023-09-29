import { Route, makeRouteConfig } from 'found';

import { Core } from 'core/components';

import App from 'screens/App';
import Auth from 'screens/Auth';
import Logout from 'screens/Auth/Logout';
import My from 'screens/My';

import { loadAuth } from 'utils/auth';

import routeNames from './routeNames';

export const createRouteConfig = () =>
  makeRouteConfig(
    <Route>
      <Route path={routeNames.home} Component={Core} getData={loadAuth}>
        <Route defer path={routeNames.login} {...Auth} />

        <Route defer path={routeNames.logout} {...Logout} />

        <Route defer {...App}>
          <Route defer path={routeNames.my} {...My} />
        </Route>
      </Route>
    </Route>,
  );
