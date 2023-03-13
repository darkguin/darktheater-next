import { RequestId } from './request-id';

export enum HttpRequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type HttpRequestBody = RequestInit['body'] | Record<string, unknown>;

export type HttpRequestEndpoint = string;

export type HttpRequestOptions = {
  params?: Record<string, string | number>;
  headers?: Record<string, string>;
  requestId?: RequestId;
  formData?: boolean;
  baseUrl?: string;
} & RequestInit;

declare namespace NodeJS {
  interface RequestInit extends globalThis.RequestInit {
    requestId?: RequestId;
  }
}
