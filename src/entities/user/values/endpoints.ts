import { generateEndpointsPath } from '@shared/utils';

const API_VERSION = 'v1';
const API_SERVICE = 'auth/api';

const BASE_ENDPOINTS = {
  CURRENT_USER: 'users/me/', // GET / PATCH
};

export const ENDPOINTS = generateEndpointsPath(
  API_SERVICE,
  API_VERSION,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;
