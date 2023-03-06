import { StorageKey } from '@core/values';
import { useAuthStore } from '@processes/auth';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const authorized = Boolean(request.cookies.get(StorageKey.AccessToken)?.value);
  useAuthStore.setState({ authorized });

  return response;
}

export const config = {
  matches: ['/**'],
};