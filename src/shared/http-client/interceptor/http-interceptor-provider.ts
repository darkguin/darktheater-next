import { HttpError } from '../types/http-error';
import { HttpInterceptor } from './http-interceptor';

type HttpInterceptorFn<T> = (req: Request, res?: Response) => Promise<T>;

export class HttpInterceptorProvider {
  private readonly _interceptors: HttpInterceptor[] = [];

  constructor(interceptors: HttpInterceptor[] = []) {
    this._interceptors = interceptors;
  }

  public registerInterceptor(interceptor: HttpInterceptor) {
    if (this._interceptors.includes(interceptor)) {
      throw new Error('Interceptor is already include');
    }
    this._interceptors.push(interceptor);
  }

  protected async triggerInterceptor<T = void>(
    method: 'onRequest' | 'onResponse' | 'onResponseError',
    request: Request,
    response?: Response | HttpError<unknown>,
  ): Promise<T> {
    let responseErrorData: T | null = null;

    const execInterceptor = async (interceptor: HttpInterceptor) => {
      return await new Promise<T>((resolve) => {
        const interceptorFn = interceptor[method] as HttpInterceptorFn<T>;
        return resolve(interceptorFn?.(request, response) || null);
      });
    };

    for (const interceptor of this._interceptors) {
      if (method === 'onResponseError') {
        responseErrorData = await execInterceptor(interceptor);
        if (Boolean(responseErrorData)) break;
      } else {
        await execInterceptor(interceptor);
      }
    }

    return responseErrorData as T;
  }
}