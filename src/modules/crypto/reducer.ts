import { createReducer } from '@reduxjs/toolkit';

import { api } from 'api/index';

import type { Currency } from './types';

const initialState = {
  currenciesBySlug: {} as Record<string, Currency>,
  slugs: [] as string[],
};

const cryptoCurrenciesReducer = createReducer(initialState, builder => {
  builder.addMatcher(
    api.endpoints.getCryptoCurrencies.matchFulfilled,
    (draft, { payload: { data } }) => {
      draft.currenciesBySlug = data;
      draft.slugs = Object.keys(data);
    },
  );
});

export default cryptoCurrenciesReducer;
