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

    return $http.post<HttpSuccessResponse>(ENDPOINT, body).then(({ data }) => data);
  };

  const confirmEmail = (token: string): Promise<HttpSuccessResponse> => {
    return $http
      .post<HttpSuccessResponse>(ENDPOINTS.EMAIL_VERIFICATION, { token })
      .then(({ data }) => data);
  };

  const confirmAccountDeletion = (token: string): Promise<HttpSuccessResponse> => {
    return $http
      .delete<HttpSuccessResponse>(ENDPOINTS.CURRENT_USER, { params: { token } })
      .then(({ data }) => data);
  };

  const confirmResetPassword = (password: string, token: string): Promise<HttpSuccessResponse> => {
    return $http
      .put<HttpSuccessResponse>(ENDPOINTS.CHANGE_PASSWORD, { token, new_password: password })
      .then(({ data }) => data);
  };

  return { sendConfirmEmail, confirmEmail, confirmAccountDeletion, confirmResetPassword };
}
