import { User, useUserApi } from '@entities/user';
import { useCurrentUserStore } from '@processes/auth/stores/useCurrentUserSrote';

export function useCurrentUser() {
  const { fetchCurrentUser: fetchData } = useUserApi();
  const currentUser = useCurrentUserStore((state) => state.currentUser);
  const setCurrentUser = useCurrentUserStore((state) => state.setCurrentUser);

  const fetchCurrentUser = async () => {
    const user: User = await fetchData();
    setCurrentUser(user);
    return user;
  };

  return { setCurrentUser, currentUser, fetchCurrentUser };
}
