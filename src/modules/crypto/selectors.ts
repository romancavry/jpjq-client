import { REDUCER_NAME } from './constants';
import reducer from './reducer';

type ReducerState = ReturnType<typeof reducer>;

type State = {
  [REDUCER_NAME]: ReducerState;
};

export const getCurrenciesBySlug = <T>(state: T & State) =>
  state[REDUCER_NAME].currenciesBySlug;
