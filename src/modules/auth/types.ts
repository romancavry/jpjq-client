import { AUTH_TYPES } from './constants';

export interface User {
  id: number;
  username: string;
  rememberMeToken: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthValues {
  username: string;
  password: string;
}

export type AuthType = (typeof AUTH_TYPES)[keyof typeof AUTH_TYPES];
