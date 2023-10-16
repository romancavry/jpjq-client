import * as React from 'react';

import { AppContent } from './styled';

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => (
  <AppContent>{children}</AppContent>
);

export default App;
