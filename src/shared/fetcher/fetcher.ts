import urlJoin from 'url-join';

export type FetcherMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';
export type FetcherError = Response;

export type FetcherParams = Record<string, string | number | boolean>;
export type FetcherHeader = string;
export type FetcherHeaders = Record<FetcherHeader, string>;

export async function fetcher<T>(
  method: FetcherMethod,
  input: RequestInfo | URL,
  init: RequestInit = {},
): Promise<T> {
  init.method = method;
  init.mode = 'cors';

  const response = await fetch(input, init);

  /**
   * @NOTE: Next.js recommended handle errors
   * @doc: https://beta.nextjs.org/docs/data-fetching/fetching
   */
  if (!response.ok) {
    throw response as FetcherError;
  }

  return (await response.json()) as Promise<T>;
}

export function createFetcherUrl(paths: string[], params: FetcherParams = {}) {
  let paramsString = Object.entries(params)
    .map(([k, v]) => (v || v === 0 ? `${k}=${v}` : null))
    .filter(Boolean)
    .join('&');

  if (paramsString) paramsString = `?${paramsString}`;

  return urlJoin(paths) + paramsString;
}

export function createFetcherHeaders(headers: FetcherHeaders = {}) {
  return new Headers(headers);
}