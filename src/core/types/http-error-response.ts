import { ApiErrorCodes } from '@/core';

export interface HttpErrorResponse {
  detail: string;
  error_code: ApiErrorCodes;
}
