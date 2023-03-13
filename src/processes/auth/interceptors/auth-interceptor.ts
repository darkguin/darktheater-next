import { StorageKey } from '@core/values';
import { withNextSessionApi } from '@entities/session';
import { useAuthStore, useCurrentUserStore } from '@processes/auth';
import {
  ApiErrorCodes,
  HttpErrorResponse,
  HttpHeader,
  withHttpClient,
} from '@providers/http-client';
import { HttpError, HttpInterceptor } from '@shared/http-client';
import { getServerCookies } from '@shared/server-cookie';
import { isServer } from '@shared/utils';
import { getCookie as getClientCookie } from 'cookies-next';

const getCookie = (key: StorageKey) => {
  return isServer() ? getServerCookies(key) : getClientCookie(key);
};

export class AuthInterceptor extends HttpInterceptor {
  private tokenUpdating = false;

  onRequest(request: Request): void {
    const accessToken = getCookie(StorageKey.AccessToken);
    if (!accessToken) return;
    request.headers.set(HttpHeader.AUTHORIZATION, `Bearer: ${accessToken}`);
  }

  async onResponseError(originalRequest: Request, error: HttpError<HttpErrorResponse>) {
    let errorCode = ApiErrorCodes.Base;

    try {
      const { error_code } = await error.json();
      errorCode = error_code;
    } catch (e) {
      console.error('onResponseError: ', error.status, error.statusText, originalRequest.url);
    }

    if (errorCode === ApiErrorCodes.AccessTokenExpired && !this.tokenUpdating) {
      this.tokenUpdating = true;

      return await withNextSessionApi()
        .refreshSession()
        .then(() => {
          this.tokenUpdating = false;
          return withHttpClient().sendRequest(originalRequest);
        });
    }

    if (errorCode === ApiErrorCodes.RefreshTokenNotfound) {
      useCurrentUserStore.setState({ currentUser: null });
      useAuthStore.setState({ authorized: false });
      await withNextSessionApi().clearSession();
    }
  }
}