import { User, useUserApi } from '@entities/user';
import { useCurrentUserStore } from '@processes/auth/stores/useCurrentUserSrote';

export function useCurrentUser() {
  const { fetchCurrentUser: fetchData } = useUserApi();

  const currentUser = () => {
    useCurrentUserStore.getState().currentUser;
  };

  const setCurrentUser = (currentUser: User | null) => {
    useCurrentUserStore.setState({ currentUser });
  };

  const fetchCurrentUser = async () => {
    const user: User = await fetchData();
    setCurrentUser(user);
    return user;
  };

  return { useCurrentUserStore, setCurrentUser, currentUser, fetchCurrentUser };
}
