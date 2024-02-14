import type { AuthType } from './types';

export const buildAuthPath = ({ type }: { type: AuthType }) => `/auth/${type}`;
