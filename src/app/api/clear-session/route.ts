import { StorageKey } from '@core/values';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const response = NextResponse.next();
  response.cookies.delete(StorageKey.AccessToken);
  response.cookies.delete(StorageKey.RefreshToken);
  return response;
}