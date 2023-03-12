import { ApiSession, Credentials, SessionMapper } from '@entities/session';
import { withHttpClient } from '@providers/http-client';
import { getNextApiBaseUrl } from '@shared/utils';

import { Session } from '../types/session';
import { ENDPOINTS } from '../values/endpoints';
import { NEXT_ENDPOINTS } from '../values/next.endpoints';

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

  const refreshSession = (refresh_token: string): Promise<ApiSession> => {
    return $http.post<ApiSession>(ENDPOINTS.REFRESH_TOKEN, { refresh_token });
  };

  const refreshSessionByNext = (): Promise<Session> => {
    const baseUrl = getNextApiBaseUrl();
    return $http
      .post<ApiSession>(NEXT_ENDPOINTS.REFRESH_SESSION, null, { baseUrl })
      .then(SessionMapper.map);
  };

  const clearSessionByNext = (): Promise<void> => {
    const baseUrl = getNextApiBaseUrl();
    return $http.post<void>(NEXT_ENDPOINTS.CLEAR_SESSION, null, { baseUrl });
  };

  return { signIn, signUp, refreshSession, refreshSessionByNext, clearSessionByNext };
}
