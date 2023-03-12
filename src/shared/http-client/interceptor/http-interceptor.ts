import { HttpError } from '../types/http-error';

export abstract class HttpInterceptor {
  onRequest?(request: Request): Promise<void> | void;

  onResponse?(originalRequest: Request, response: Response): Promise<void> | void;

  onResponseError?(
    originalRequest: Request,
    response: HttpError<unknown>,
  ): Promise<unknown> | Promise<void> | void;
}