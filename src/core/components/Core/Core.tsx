import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

import { ErrorBoundary } from 'core/components';

import { AlertProvider } from 'uikit/molecules';
import { variables } from 'uikit/theme';

import './globals.css';

const Core = () => (
  <React.Fragment>
    <Helmet>
      <body className={variables} />
    </Helmet>

    <ErrorBoundary>
      <AlertProvider />

      <Outlet />
    </ErrorBoundary>
  </React.Fragment>
);

export default Core;
