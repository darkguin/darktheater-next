import urlJoin from 'url-join';

import { HttpClient } from './http-client';
import { HttpRequestEndpoint, HttpRequestMethod, HttpRequestOptions, RequestId } from './types';

export function RequestBuilder<T extends typeof HttpClient>(constructor: T) {
  const createUrl = (path: string, params: Record<string, unknown> = {}, baseURL: string) => {
    let paramsString = Object.entries(params)
      .map(([k, v]) => (v || v === 0 ? `${k}=${v}` : null))
      .filter(Boolean)
      .join('&');

    if (paramsString) paramsString = `?${paramsString}`;

    if (!baseURL) return urlJoin(path) + paramsString;
    return urlJoin(baseURL, path) + paramsString;
  };

  const createHeaders = (init?: HeadersInit, formData = false) => {
    const headers = new Headers(init);
    headers.set('Accept', 'application/json, text/plain, */*');

    if (!formData) headers.set('Content-Type', 'application/json');
    return headers as Record<string, string> & Headers;
  };

  const createAbortSignal = function (this: HttpClient, requestId?: RequestId) {
    if (requestId) {
      const controller = new AbortController();
      this._requestControllers.set(requestId, controller);
      return controller.signal;
    }
    return null;
  };

  return class extends HttpClient {
    createRequest(
      method: HttpRequestMethod | string,
      path: HttpRequestEndpoint,
      body: BodyInit,
      options: HttpRequestOptions,
    ): Request {
      options.method = method;
      options.body = body;
      options.headers = createHeaders(options.headers, options.formData);
      options.signal = createAbortSignal.call(this, options.requestId);

      const url = createUrl(path, options.params, options.baseUrl || this.baseURL);

      return new Request(url, options);
    }
  };
}

export interface withRequestBuilder {
  createRequest(
    method: HttpRequestMethod | string,
    path: HttpRequestEndpoint,
    body: BodyInit,
    options: HttpRequestOptions,
  ): Request;
}