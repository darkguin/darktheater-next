import { AuthInterceptor } from '@processes/auth/interceptors';
import { HttpClient } from '@shared/http-client';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

const httpClient: HttpClient = new HttpClient(BASE_URL, [new AuthInterceptor()]);

export function withHttpClient() {
  return httpClient;
}
