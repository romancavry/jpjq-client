import * as React from 'react';
import { Helmet } from 'react-helmet';

import { ErrorBoundary } from 'core/components';

import { variables, globals } from 'uikit/theme';
import { AlertProvider } from 'uikit/molecules';

const Core: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <body className={`${globals} ${variables}`} />
    </Helmet>

    <ErrorBoundary>
      <AlertProvider />

      {children}
    </ErrorBoundary>
  </React.Fragment>
);

export default Core;
