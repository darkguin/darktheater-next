import { User, useUserApi } from '@entities/user';
import { useCurrentUserStore } from '@processes/auth/stores/useCurrentUserSrote';

export function useCurrentUser() {
  const { fetchCurrentUser: fetchData } = useUserApi();
  const currentUser = useCurrentUserStore((state) => state.currentUser);
  const setCurrentUser = useCurrentUserStore((state) => state.setCurrentUser);

  const fetchCurrentUser = async () => {
    return await fetchData().then((user: User) => {
      setCurrentUser(user);
      return user;
    });
  };

  return { setCurrentUser, currentUser, fetchCurrentUser };
}
