import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { REDUCER_NAME as CRYPTO_CURRENCIES_REDUCER_NAME } from 'modules/crypto';
import cryptoCurrenciesReducer from 'modules/crypto/reducer';

import rootApi from './rootApi';

const preloadedState = {};

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  [CRYPTO_CURRENCIES_REDUCER_NAME]: cryptoCurrenciesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rootApi.middleware),
  preloadedState,
  devTools: import.meta.env.MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
