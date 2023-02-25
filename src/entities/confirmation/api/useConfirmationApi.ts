import { HttpSuccessResponse, withHttpClient } from '@providers/http-client';

import { ENDPOINTS } from '../values/endpoints';

export function useConfirmationApi() {
  const $http = withHttpClient();

  const sendConfirmEmail = (type: string, withAuth?: boolean, email?: string) => {
    const body: Record<string, string> = { email_type: type };
    if (!withAuth && email) body.email = email;

    const ENDPOINT = withAuth
      ? ENDPOINTS.EMAIL_CONFIRMATION_WITH_AUTH
      : ENDPOINTS.EMAIL_CONFIRMATION;

    return $http.post<HttpSuccessResponse, HttpSuccessResponse>(ENDPOINT, body);
  };

  const confirmEmail = (token: string): Promise<HttpSuccessResponse> => {
    return $http.post<HttpSuccessResponse, HttpSuccessResponse>(ENDPOINTS.EMAIL_VERIFICATION, {
      token,
    });
  };

  const confirmAccountDeletion = (token: string): Promise<HttpSuccessResponse> => {
    return $http.delete<HttpSuccessResponse, HttpSuccessResponse>(ENDPOINTS.CURRENT_USER, {
      params: { token },
    });
  };

  const confirmResetPassword = (password: string, token: string): Promise<any> => {
    return $http.put<HttpSuccessResponse, HttpSuccessResponse>(ENDPOINTS.CHANGE_PASSWORD, {
      token,
      new_password: password,
    });
  };

  return { sendConfirmEmail, confirmEmail, confirmAccountDeletion, confirmResetPassword };
}
