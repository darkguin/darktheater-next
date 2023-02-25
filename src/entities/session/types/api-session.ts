import { ApiUser } from '@entities/user';

export interface ApiSession {
  access_token: string;
  refresh_token: string;
  user: ApiUser;
}
