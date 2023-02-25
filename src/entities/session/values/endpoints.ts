import { generateEndpointsPath } from '@shared/utils';

const API_VERSION = 'v1';
const API_SERVICE = 'auth/api';

const BASE_ENDPOINTS = {
  SIGN_IN: 'auth/signin/',
  SIGN_UP: 'auth/signup/',
  REFRESH_TOKEN: 'auth/refresh-token/',
  CHANGE_PASSWORD: 'auth/change-password/',
};

export const ENDPOINTS = generateEndpointsPath(
  API_SERVICE,
  API_VERSION,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;
