import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { Matcher, createMatchEnhancer, foundReducer } from 'found';
import FarceActions from 'farce/Actions';
import BrowserProtocol from 'farce/BrowserProtocol';
import createHistoryEnhancer from 'farce/createHistoryEnhancer';
import queryMiddleware from 'farce/queryMiddleware';

import { createRouteConfig } from 'core/routes/routeConfig';

import authApi from './modules/auth/reducer';
import { createApi } from './createApi';

const preloadedState = {};

export const rootApi = createApi({ reducerPath: 'app' });

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  found: foundReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [
    createHistoryEnhancer({
      protocol: new BrowserProtocol(),
      middlewares: [queryMiddleware],
    }),
    createMatchEnhancer(new Matcher(createRouteConfig())),
  ],
});

// Initialize store
store.dispatch(FarceActions.init());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
