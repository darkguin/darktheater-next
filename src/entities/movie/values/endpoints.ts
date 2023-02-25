import { generateEndpointsPath } from '@shared/utils';

const API_VERSION = 'v1';
const API_SERVICE = 'content/api';

const BASE_ENDPOINTS = {
  MOVIES: 'content/movies/', // GET
  MOVIES_ID: 'content/movies/:id/', // GET
};

export const ENDPOINTS = generateEndpointsPath(
  API_SERVICE,
  API_VERSION,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;