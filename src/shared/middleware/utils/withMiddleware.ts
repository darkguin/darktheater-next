import { Middleware } from '@shared/middleware/types/middleware';
import { NextRequest, NextResponse } from 'next/server';

export function withMiddleware(
  request: NextRequest,
  response: NextResponse,
  middlewares: Middleware[] = [],
) {
  const pathname = request.nextUrl.pathname;
  let nextResponse: NextResponse | null = null;

  middlewares.forEach(({ paths = [], handler, global }) => {
    if (!global || !paths.filter((path) => pathname.startsWith(path)).length) {
      return;
    }

    nextResponse = handler(request, response) ?? null;
    if (nextResponse) return nextResponse;
  });

  return nextResponse;
}