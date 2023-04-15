import { Route, RoutesList } from '@core/values';
import { CatalogMiddleware } from '@features/catalog';
import { CollectionsMiddleware } from '@features/collections';
import { AuthMiddleware, SessionMiddleware, UnAuthMiddleware } from '@processes/auth';
import { Middleware, withMiddleware } from '@shared/middleware';
import { NextRequest, NextResponse } from 'next/server';

const middlewares: Middleware[] = [
  AuthMiddleware,
  UnAuthMiddleware,
  CatalogMiddleware,
  CollectionsMiddleware,
  SessionMiddleware,
];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const isPage = RoutesList.includes(request.nextUrl.pathname as Route);
  const nextResponse = isPage ? await withMiddleware(request, response, middlewares) : null;

  return nextResponse || response;
}

export const config = {
  matches: ['/**'],
};