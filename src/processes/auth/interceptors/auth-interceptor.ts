import { Routes, StorageKey } from '@core/values';
import { useAuth } from '@processes/auth';
import { ApiErrorCodes, HttpErrorResponse } from '@providers/http-client';
import { isServer } from '@shared/utils';
import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';
import type { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import type { ReadonlyHeaders, ReadonlyRequestCookies } from 'next/dist/server/app-render';
import { redirect } from 'next/navigation';

type CookieStore = Record<StorageKey, string | null> & any;

export function registerAuthInterceptor(
  httpClient: AxiosInstance,
  cookies?: () => RequestCookies | ReadonlyRequestCookies,
  headers?: () => Headers | ReadonlyHeaders,
) {
  let tokenUpdating = false;

  const cookie = (key: string) => {
    return (isServer() ? cookies?.().get(key)?.value : (getCookie(key) as string)) ?? '';
  };

  httpClient.interceptors.request.use(async (value: InternalAxiosRequestConfig) => {
    const accessToken = cookie(StorageKey.AccessToken);

    if (accessToken) {
      value.headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return value;
  });

  httpClient.interceptors.response.use(null, async (error: AxiosError<HttpErrorResponse>) => {
    const originalRequest = error.config!;
    const { error_code } = error.response?.data || {};
    const { signOut, refreshSession } = useAuth();

    if (error_code === ApiErrorCodes.AccessTokenExpired && !tokenUpdating) {
      tokenUpdating = true;
      return await refreshSession().then(() => httpClient.request(originalRequest));
    }

    if (error_code === ApiErrorCodes.RefreshTokenNotfound) {
      await signOut();
      return redirect(Routes.SignIn);
    }

    return error;
  });
}
