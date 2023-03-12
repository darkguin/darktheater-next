import { StorageKey } from '@core/values';
import { useSessionApi } from '@entities/session';
import { HttpErrorResponse } from '@providers/http-client';
import { HttpError } from '@shared/http-client';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { value: refreshToken } = request.cookies.get(StorageKey.RefreshToken)!;

  try {
    const data = await useSessionApi().refreshSession(refreshToken);

    const response = NextResponse.json(data);
    response.cookies.set(StorageKey.AccessToken, data.access_token);
    response.cookies.set(StorageKey.RefreshToken, data.refresh_token);
    return response;
  } catch (e: unknown) {
    const { status, statusText } = e as HttpError<HttpErrorResponse>;
    return NextResponse.next({ status, statusText });
  }
}