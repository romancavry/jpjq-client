import { resolver } from 'found';

import { Router } from './components';

const Root = () => (
  // <Provider store={store}>
  <Router resolver={resolver} />
  // </Provider>
);

export default Root;
