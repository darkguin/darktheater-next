import { generateEndpointsPath } from '@shared/utils';

const API_VERSION = 'v1';
const API_SERVICE = 'auth/api';

const BASE_ENDPOINTS = {
  CURRENT_USER: 'users/me/', // DELETE
  CHANGE_PASSWORD: 'auth/change-password/', // PUT
  EMAIL_VERIFICATION: 'auth/email-verification/', // POST
  EMAIL_CONFIRMATION: 'auth/send-email-confirmation/',
  EMAIL_CONFIRMATION_WITH_AUTH: 'users/me/send-email-confirmation/',
};

export const ENDPOINTS = generateEndpointsPath(
  API_SERVICE,
  API_VERSION,
  BASE_ENDPOINTS,
) as typeof BASE_ENDPOINTS;
