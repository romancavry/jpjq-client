import { Provider } from 'react-redux';
import { resolver } from 'found';

import { store } from 'api/store';

import { Router } from './components';

const Root = () => (
  <Provider store={store}>
    <Router resolver={resolver} matchContext={{ store }} />
  </Provider>
);

export default Root;
