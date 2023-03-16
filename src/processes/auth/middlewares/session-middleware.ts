import { decodeJwt } from '@core/utils/decode-jwt';
import { Route, StorageKey } from '@core/values';
import { useSessionApi as sessionApi } from '@entities/session';
import { defineMiddleware } from '@shared/middleware';
import dayjs, { unix } from 'dayjs';
import { JwtPayload } from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';

type TokenPayload = JwtPayload & {
  exp: number;
};

export const SessionMiddleware = defineMiddleware({
  global: true,
  async handler(req: NextRequest) {
    const accessToken = req.cookies.get(StorageKey.AccessToken)?.value;
    const refreshToken = req.cookies.get(StorageKey.RefreshToken)?.value;

    if (!accessToken || !refreshToken) return;

    const { exp } = decodeJwt<TokenPayload>(accessToken) || {};
    const isValid = dayjs().isBefore(unix(exp!), 'minute');

    if (isValid) return;

    try {
      const { refreshSession } = sessionApi();
      const session = await refreshSession(refreshToken);

      const response = NextResponse.redirect(new URL(req.url));
      response.cookies.set(StorageKey.AccessToken, session.accessToken);
      response.cookies.set(StorageKey.RefreshToken, session.refreshToken);
      return response;
    } catch (e) {
      const response = NextResponse.redirect(new URL(Route.SignIn, req.url));
      response.cookies.delete(StorageKey.AccessToken);
      response.cookies.delete(StorageKey.RefreshToken);
      return response;
    }
  },
});

