import { generateEndpointsPath } from '@shared/utils';

const API_VERSION = 'v1';
const API_SERVICE = 'content/api';

const BASE_ENDPOINTS = {
  SERIALS: 'content/serials/', // GET
  SERIALS_ID: 'content/serials/:id/', // GET
};

export const ENDPOINTS = generateEndpointsPath(
  API_SERVICE,
  API_VERSION,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;
