import { User } from '@entities/user';

export interface Session {
  accessToken: string;
  refreshToken: string;
  user: User;
}
