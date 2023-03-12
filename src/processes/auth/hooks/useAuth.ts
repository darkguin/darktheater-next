import { useAuthStore } from '@processes/auth';

import { ConfirmationType, useConfirmationApi } from '@/entities/confirmation';
import { Credentials, useSessionApi } from '@/entities/session';

import { useAuthTokens } from './useAuthTokens';
import { useCurrentUser } from './useCurrentUser';

export function useAuth() {
  const sessionApi = useSessionApi();
  const confirmationApi = useConfirmationApi();

  const { setCurrentUser } = useCurrentUser();
  const { setRefreshToken, setAccessToken, clearTokens } = useAuthTokens();

  const setAuthorized = (state: boolean) => {
    useAuthStore.setState({ authorized: state });
  };

  const signIn = async ({ email, password }: Credentials): Promise<boolean> => {
    const { accessToken, refreshToken, user } = await sessionApi.signIn({
      username: email,
      password,
    });

    if (!user.isActive) return false;

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setAuthorized(user.isActive);
    setCurrentUser(user);
    return true;
  };

  const signUp = ({ email, username, password }: Credentials): Promise<boolean> => {
    return sessionApi.signUp({ email, username, password }).then(() => true);
  };

  const signOut = async (): Promise<boolean> => {
    clearTokens();
    setAuthorized(false);
    setCurrentUser(null);
    return sessionApi.clearSessionByNext().then(() => true);
  };

  const sendConfirmEmail = (type: ConfirmationType, auth = false, email = ''): Promise<boolean> => {
    return confirmationApi.sendConfirmEmail(type, auth, email).then(() => true);
  };

  return { useAuthStore, signIn, signUp, signOut, sendConfirmEmail };
}