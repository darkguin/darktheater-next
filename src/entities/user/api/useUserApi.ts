import { getApiUrl as url } from '@core/utils';
import { StorageKey } from '@core/values';
import { ApiUser, UserMapper } from '@entities/user';
import { createFetcherHeaders, fetcher } from '@shared/fetcher';
import { isServer } from '@shared/utils';
import { getCookie } from 'cookies-next';
import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { ReadonlyRequestCookies } from 'next/dist/server/app-render';

import { User } from '../types/user';
import { ENDPOINTS } from '../values/endpoints';

export function useUserApi(cookies?: () => RequestCookies | ReadonlyRequestCookies) {
  const accessToken = isServer()
    ? cookies?.().get(StorageKey.AccessToken)?.value ?? ''
    : (getCookie(StorageKey.AccessToken) as string) ?? '';

  const fetchCurrentUser = (): Promise<User> => {
    const options: RequestInit = {
      headers: createFetcherHeaders({ Authorization: `Bearer ${accessToken}` }),
      cache: 'no-store',
    };

    return fetcher<ApiUser>('get', url(ENDPOINTS.CURRENT_USER), options).then(UserMapper.map);
  };

  const updateUsername = (username: string): Promise<User> => {
    const options: RequestInit = {
      headers: createFetcherHeaders({ Authorization: `Bearer ${accessToken}` }),
      body: JSON.stringify({ username }),
      cache: 'no-store',
    };

    return fetcher<ApiUser>('get', url(ENDPOINTS.CURRENT_USER), options).then(UserMapper.map);
  };

  return { fetchCurrentUser, updateUsername };
}
