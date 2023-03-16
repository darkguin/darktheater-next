import { Middleware } from '@shared/middleware/types/middleware';
import { NextRequest, NextResponse } from 'next/server';

export async function withMiddleware(
  request: NextRequest,
  response: NextResponse,
  middlewares: Middleware[] = [],
) {
  const pathname = request.nextUrl.pathname;
  let nextResponse: NextResponse | null = null;

  for (const { paths = [], handler, global } of middlewares) {
    if (!global && !paths.filter((path) => pathname.startsWith(path)).length) {
      continue;
    }

    nextResponse = (await handler(request, response)) ?? null;
    if (nextResponse) return nextResponse;
  }
}