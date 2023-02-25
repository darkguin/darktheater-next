import { ApiSession } from '@entities/session';
import { ImplementsStatic, Mapper } from '@providers/http-client';

import { UserMapper } from '../../user';
import { Session } from '../types/session';

@ImplementsStatic<Mapper<ApiSession, Session>>()
export class SessionMapper {
  static mapMany(items: ApiSession[]): Session[] {
    return items.map(SessionMapper.map);
  }

  static map({ access_token, refresh_token, user }: ApiSession): Session {
    return {
      accessToken: access_token,
      refreshToken: refresh_token,
      user: UserMapper.map(user),
    };
  }
}
