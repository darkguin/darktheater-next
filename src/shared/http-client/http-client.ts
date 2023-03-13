import { isServer } from '@shared/utils';

import { HttpInterceptor, HttpInterceptorProvider } from './interceptor';
import { RequestBuilder, withRequestBuilder } from './request-builder';
import { HttpError } from './types';
import {
  HttpRequestBody,
  HttpRequestEndpoint,
  HttpRequestMethod,
  HttpRequestOptions,
} from './types/http-request';
import { RequestId } from './types/request-id';

@RequestBuilder
class HttpClient extends HttpInterceptorProvider {
  public readonly baseURL: string;
  protected readonly _requestControllers = new Map<RequestId, AbortController>();

  constructor(baseURL: string, interceptors: HttpInterceptor[] = []) {
    super(interceptors);
    this.baseURL = baseURL;
  }

  cancelRequest(id: RequestId) {
    this._requestControllers.get(id)?.abort();
    this._requestControllers.delete(id);
  }

  get<T>(path: HttpRequestEndpoint, options?: HttpRequestOptions) {
    return this.sendRequestWithBuilder<T>(HttpRequestMethod.GET, path, null, options);
  }

  post<T>(path: HttpRequestEndpoint, body: HttpRequestBody, options?: HttpRequestOptions) {
    return this.sendRequestWithBuilder<T>(HttpRequestMethod.POST, path, body, options);
  }

  put<T>(path: HttpRequestEndpoint, body: HttpRequestBody, options?: HttpRequestOptions) {
    return this.sendRequestWithBuilder<T>(HttpRequestMethod.PUT, path, body, options);
  }

  patch<T>(path: HttpRequestEndpoint, body: HttpRequestBody, options?: HttpRequestOptions) {
    return this.sendRequestWithBuilder<T>(HttpRequestMethod.PATCH, path, body, options);
  }

  delete<T>(path: HttpRequestEndpoint, options?: HttpRequestOptions) {
    return this.sendRequestWithBuilder<T>(HttpRequestMethod.DELETE, path, null, options);
  }

  async sendRequestWithBuilder<T>(
    method: HttpRequestMethod | string,
    path: HttpRequestEndpoint,
    body?: HttpRequestBody,
    options: HttpRequestOptions = {},
  ) {
    const request = this.createRequest(method, path, body as BodyInit, options);
    return this.sendRequest<T>(request);
  }

  async sendRequest<T>(request: Request) {
    await this.triggerInterceptor<void>('onRequest', request);
    const { url, body, method, headers, signal } = request;

    // @NOTE: Fetch does not work correctly with Request on the server side.
    // On the client side, the opposite is true.
    // Most likely, Next has an abstraction over fetch so that it works in Node.js
    const serverFetchOptions = { body, method, headers, signal };
    const response = isServer() ? await fetch(url, serverFetchOptions) : await fetch(request);

    if (response.ok) {
      await this.triggerInterceptor<void>('onResponse', request, response);
      return (await response.json()) as Promise<T>;
    }

    const data = await this.triggerInterceptor<T>('onResponseError', request, response);
    if (Boolean(data)) return data;

    throw response as HttpError<unknown>;
  }
}

interface HttpClient extends withRequestBuilder {
}

export { HttpClient };