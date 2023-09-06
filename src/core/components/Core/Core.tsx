import * as React from 'react';
import { Helmet } from 'react-helmet';

import { ErrorBoundary } from 'core/components';
import { defaultVariables, globalVariables } from 'core/variables';

// import '@erg/uikit/dist/fonts/index.css';

const Core: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <body className={`${globalVariables} ${defaultVariables}`} />
    </Helmet>

    <ErrorBoundary>
      {/* <AlertProvider /> */}

      {children}
    </ErrorBoundary>
  </React.Fragment>
);

export default Core;
