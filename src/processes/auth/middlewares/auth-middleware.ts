import { Route } from '@core/values';
import { isAuthByRequest } from '@processes/auth';
import { defineMiddleware } from '@shared/middleware';
import { NextRequest, NextResponse } from 'next/server';

export const AuthMiddleware = defineMiddleware({
  global: false,
  paths: [Route.Profile, Route.Collections],
  handler(req: NextRequest) {
    const isAuth = isAuthByRequest(req);
    const redirectUrl = new URL(Route.Home, req.url);
    if (!isAuth) return NextResponse.redirect(redirectUrl);
  },
});

