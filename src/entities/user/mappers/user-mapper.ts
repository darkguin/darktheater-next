import { ApiUser, UserRoles } from '@entities/user';
import { ImplementsStatic, Mapper } from '@providers/http-client';

import { User } from '../types/user';

@ImplementsStatic<Mapper<ApiUser, User>>()
export class UserMapper {
  static map({ id, username, email, is_active, role }: ApiUser): User {
    return {
      id: id,
      username: username,
      email: email,
      isActive: is_active,
      role: role as UserRoles,
    };
  }
}
