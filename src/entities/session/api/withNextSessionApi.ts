import { ApiSession, SessionMapper } from '@entities/session';
import { withHttpClient } from '@providers/http-client';
import { getNextApiBaseUrl } from '@shared/utils';

import { Session } from '../types/session';
import { NEXT_ENDPOINTS } from '../values/next.endpoints';

export function withNextSessionApi() {
  const $http = withHttpClient();
  const baseUrl = getNextApiBaseUrl();

  const refreshSession = (): Promise<Session> => {
    return $http
      .post<ApiSession>(NEXT_ENDPOINTS.REFRESH_SESSION, null, { baseUrl })
      .then(SessionMapper.map);
  };

  const clearSession = (): Promise<void> => {
    return $http.post<void>(NEXT_ENDPOINTS.CLEAR_SESSION, null, { baseUrl });
  };

  return { refreshSession, clearSession };
}
