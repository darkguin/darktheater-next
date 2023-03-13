import { StorageKey } from '@core/values';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { OptionsType as CookieOptions } from 'cookies-next/src/types';

const ONE_YEAR = 60 * 60 * 24 * 365;

export function useAuthTokens() {
  const options: CookieOptions = { path: '/', maxAge: ONE_YEAR };

  const getAccessToken = () => (getCookie(StorageKey.AccessToken, options) as string) ?? '';
  const setAccessToken = (value: string) => setCookie(StorageKey.AccessToken, value, options);

  const getRefreshToken = () => (getCookie(StorageKey.RefreshToken, options) as string) ?? '';
  const setRefreshToken = (value: string) => setCookie(StorageKey.RefreshToken, value, options);

  const clearTokens = () => {
    deleteCookie(StorageKey.AccessToken, options);
    deleteCookie(StorageKey.RefreshToken, options);
  };

  return { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken, clearTokens };
}