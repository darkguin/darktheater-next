import { ApiSession, Credentials, SessionMapper } from '@entities/session';
import { withHttpClient } from '@providers/http-client';

import { Session } from '../types/session';
import { ENDPOINTS } from '../values/endpoints';

export function useSessionApi() {
  const $http = withHttpClient();

  const signIn = (credentials: Credentials): Promise<Session> => {
    const data = new FormData();
    if (credentials.email) data.append('email', credentials.email);
    if (credentials.username) data.append('username', credentials.username);
    if (credentials.password) data.append('password', credentials.password);

    return $http
      .post<ApiSession>(ENDPOINTS.SIGN_IN, data, { formData: true })
      .then(SessionMapper.map);
  };

  const signUp = (credentials: Credentials): Promise<Session> => {
    return $http
      .post<ApiSession>(ENDPOINTS.SIGN_UP, JSON.stringify({ ...credentials }))
      .then(SessionMapper.map);
  };

  const refreshSession = (refresh_token: string): Promise<Session> => {
    return $http
      .post<ApiSession>(ENDPOINTS.REFRESH_TOKEN, { refresh_token })
      .then(SessionMapper.map);
  };

  return { signIn, signUp, refreshSession };
}
