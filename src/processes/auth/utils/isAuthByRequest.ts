import { StorageKey } from '@core/values';
import { NextRequest } from 'next/server';

export function isAuthByRequest(req: NextRequest) {
  return !!req.cookies.get(StorageKey.AccessToken)?.value;
}