import { Route } from '@core/values';
import { isAuthByRequest } from '@processes/auth';
import { defineMiddleware } from '@shared/middleware';
import { NextRequest, NextResponse } from 'next/server';

export const UnAuthMiddleware = defineMiddleware({
  global: false,
  paths: [Route.SignIn, Route.SignUp],
  handler(req: NextRequest) {
    const isAuth = isAuthByRequest(req);
    const redirectUrl = new URL(Route.Home, req.url);
    if (isAuth) return NextResponse.redirect(redirectUrl);
  },
});