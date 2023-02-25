import { ApiErrorCodes } from '@providers/http-client';

export interface HttpErrorResponse {
  detail: string;
  error_code: ApiErrorCodes;
}
