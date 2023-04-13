import { generateEndpointsPath } from '@shared/utils';

const API_VERSION = 'v1';
const API_SERVICE = 'content/api';

const BASE_ENDPOINTS = {
  COLLECTION: 'users/me/library/:type/', // GET
  ADD_COLLECTION_ITEM: 'users/me/library/', // POST
  DELETE_COLLECTION_ITEM: 'users/me/library/:id/', // DELETE
  EDIT_COLLECTION_ITEM: 'users/me/library/:id/', // PATCH
};

export const ENDPOINTS = generateEndpointsPath(
  API_SERVICE,
  API_VERSION,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;
