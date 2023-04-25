import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

/**
 * Current NextResponse cookies.
 * @Important: Not null if setServerCookiesContext is called on the Next.js Page
 */
let serverCookies: (() => RequestCookies | ReadonlyRequestCookies) | null = null;

export function getServerCookies(key: string) {
  return serverCookies?.().get(key) ?? null;
}

export function setServerCookiesContext(cookies: () => RequestCookies | ReadonlyRequestCookies) {
  serverCookies = cookies;
}
