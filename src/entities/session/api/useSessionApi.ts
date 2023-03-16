import { getApiUrl as url } from '@core/utils';
import { DefaultHttpHeaders as headers } from '@core/values';
import { ApiSession, Credentials, SessionMapper } from '@entities/session';
import { fetcher } from '@shared/fetcher';

import { Session } from '../types/session';
import { ENDPOINTS } from '../values/endpoints';

export function useSessionApi() {
  const signIn = (credentials: Credentials): Promise<Session> => {
    const body = new FormData();
    if (credentials.email) body.append('email', credentials.email);
    if (credentials.username) body.append('username', credentials.username);
    if (credentials.password) body.append('password', credentials.password);

    return fetcher<ApiSession>('post', url(ENDPOINTS.SIGN_IN), { body }).then(SessionMapper.map);
  };

  const signUp = (credentials: Credentials): Promise<Session> => {
    const body = JSON.stringify({ ...credentials });

    return fetcher<ApiSession>('post', url(ENDPOINTS.SIGN_UP), { body }).then(SessionMapper.map);
  };

  const refreshSession = (refresh_token: string): Promise<Session> => {
    return fetcher<ApiSession>('post', url(ENDPOINTS.REFRESH_TOKEN), {
      headers,
      body: JSON.stringify({ refresh_token }),
    }).then(SessionMapper.map);
  };

  return { signIn, signUp, refreshSession };
}
