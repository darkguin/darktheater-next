import { HttpClient } from './http-client';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

const httpClient = new HttpClient(BASE_URL);

export function withHttpClient() {
  return httpClient;
}
