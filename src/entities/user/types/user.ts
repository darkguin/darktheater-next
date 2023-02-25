import { UserRoles } from '@entities/user';

export interface User {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
  role: UserRoles;
}
