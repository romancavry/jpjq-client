import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Core } from 'core/components';

import Auth from 'screens/Auth';
import Errors from 'screens/Errors/Errors';
import Home from 'screens/Home';
import Logout from 'screens/Logout';

import My from 'screens/My';
import Accounting from 'screens/My/screens/Accounting';
import Stock from 'screens/My/screens/Stock';

import { AuthorizedOnly, loadAuth, UnauthorizedOnly } from 'utils/auth';

import routes from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Core />} errorElement={<Errors />} loader={loadAuth}>
      <Route path={routes.home} {...Home} />

      <Route Component={UnauthorizedOnly}>
        <Route path={routes.auth} {...Auth} />
      </Route>

      <Route Component={AuthorizedOnly}>
        <Route path={routes.logout} {...Logout} />

        <Route {...My}>
          <Route path={routes.accounting} {...Accounting} />
          <Route path={routes.stock} {...Stock} />
        </Route>
      </Route>
    </Route>,
  ),
);

export default router;
