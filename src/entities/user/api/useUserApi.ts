import { ApiUser, UserMapper } from '@entities/user';
import { withHttpClient } from '@providers/http-client';

import { User } from '../types/user';
import { ENDPOINTS } from '../values/endpoints';

export function useUserApi() {
  const $http = withHttpClient();

  const fetchCurrentUser = (): Promise<User> => {
    return $http.get<ApiUser, ApiUser>(ENDPOINTS.CURRENT_USER).then(UserMapper.map);
  };

  const updateUsername = (username: string): Promise<User> => {
    return $http.patch<ApiUser, ApiUser>(ENDPOINTS.CURRENT_USER, { username }).then(UserMapper.map);
  };

  return { fetchCurrentUser, updateUsername };
}