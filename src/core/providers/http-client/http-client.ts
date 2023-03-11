import { HttpError } from '@providers/http-client/types/http-error';
import urlJoin from 'url-join';

import {
  HttpRequestBody,
  HttpRequestEndpoint,
  HttpRequestMethod,
  HttpRequestOptions,
} from './types/http-request';
import { RequestId } from './values/request-id';

export class HttpClient {
  public readonly baseURL: string;
  private readonly _requestControllers = new Map<RequestId, AbortController>();

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  cancelRequest(id: RequestId) {
    this._requestControllers.get(id)?.abort();
    this._requestControllers.delete(id);
  }

  get<T>(path: HttpRequestEndpoint, options?: HttpRequestOptions) {
    return this.sendRequest<T>(HttpRequestMethod.GET, path, null, options);
  }

  post<T>(path: HttpRequestEndpoint, body: HttpRequestBody, options?: HttpRequestOptions) {
    return this.sendRequest<T>(HttpRequestMethod.POST, path, body, options);
  }

  put<T>(path: HttpRequestEndpoint, body: HttpRequestBody, options?: HttpRequestOptions) {
    return this.sendRequest<T>(HttpRequestMethod.PUT, path, body, options);
  }

  patch<T>(path: HttpRequestEndpoint, body: HttpRequestBody, options?: HttpRequestOptions) {
    return this.sendRequest<T>(HttpRequestMethod.PATCH, path, body, options);
  }

  delete<T>(path: HttpRequestEndpoint, options?: HttpRequestOptions) {
    return this.sendRequest<T>(HttpRequestMethod.DELETE, path, null, options);
  }

  async sendRequest<T>(
    method: HttpRequestMethod | string,
    path: HttpRequestEndpoint,
    body?: HttpRequestBody,
    options: HttpRequestOptions = {},
  ) {
    options.method = method;
    options.body = body as BodyInit;

    this.addAbortController(options, new AbortController());
    this.addHeaders(options);

    const url = this.createUrl(path, options.params);
    const data = await fetch(url, options);

    if (data.ok) return (await data.json()) as Promise<T>;
    throw data as HttpError;
  }

  private createUrl(path: string, params: Record<string, unknown> = {}) {
    let paramsString = Object.entries(params)
      .map(([k, v]) => (v || v === 0 ? `${k}=${v}` : null))
      .filter(Boolean)
      .join('&');

    if (paramsString) paramsString = `?${paramsString}`;

    if (!this.baseURL) return urlJoin(path) + paramsString;
    return urlJoin(this.baseURL, path) + paramsString;
  }

  private addHeaders(options: HttpRequestOptions) {
    const headers = new Headers(options.headers);

    headers.set('Accept', 'application/json, text/plain, */*');
    if (!options.formData) headers.set('Content-Type', 'application/json');

    options.headers = headers as Record<string, string> & Headers;
  }

  private addAbortController(options: HttpRequestOptions, controller: AbortController) {
    if (options?.requestId) {
      this._requestControllers.set(options.requestId, controller);
      options.signal = controller.signal;
    }
  }
}