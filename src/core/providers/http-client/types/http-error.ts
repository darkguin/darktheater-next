import { HttpErrorResponse } from '@providers/http-client';

export type HttpError = {
  json(): Promise<HttpErrorResponse>;
} & Response;