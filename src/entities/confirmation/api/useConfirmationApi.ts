import { API_BASE_URL } from '@core/values';
import { createFetcherUrl, fetcher } from '@shared/fetcher';

import { HttpSuccessResponse } from '@/core';

import { ENDPOINTS } from '../values/endpoints';

export function useConfirmationApi() {
  const sendConfirmEmail = (type: string, withAuth?: boolean, email?: string) => {
    const body: Record<string, string> = { email_type: type };
    if (!withAuth && email) body.email = email;

    const ENDPOINT = withAuth
      ? ENDPOINTS.EMAIL_CONFIRMATION_WITH_AUTH
      : ENDPOINTS.EMAIL_CONFIRMATION;

    const url = createFetcherUrl([API_BASE_URL, ENDPOINT]);
    return fetcher<HttpSuccessResponse>('post', url, { body: JSON.stringify(body) });
  };

  const confirmEmail = (token: string): Promise<HttpSuccessResponse> => {
    const url = createFetcherUrl([API_BASE_URL, ENDPOINTS.EMAIL_VERIFICATION]);
    const body = JSON.stringify({ token });

    return fetcher<HttpSuccessResponse>('post', url, { body });
  };

  const confirmAccountDeletion = (token: string): Promise<HttpSuccessResponse> => {
    const url = createFetcherUrl([API_BASE_URL, ENDPOINTS.CURRENT_USER], { token });
    return fetcher<HttpSuccessResponse>('delete', url);
  };

  const confirmResetPassword = (password: string, token: string): Promise<HttpSuccessResponse> => {
    const url = createFetcherUrl([API_BASE_URL, ENDPOINTS.CHANGE_PASSWORD]);
    const body = JSON.stringify({ token, new_password: password });

    return fetcher<HttpSuccessResponse>('put', url, { body });
  };

  return { sendConfirmEmail, confirmEmail, confirmAccountDeletion, confirmResetPassword };
}
