import { HttpError } from '../types/http-error';
import { HttpInterceptor } from './http-interceptor';

type HttpInterceptorKey = keyof HttpInterceptor;

export class HttpInterceptorProvider {
  private readonly _interceptors: HttpInterceptor[];

  constructor(interceptors: HttpInterceptor[] = []) {
    this._interceptors = interceptors;
  }

  protected async triggerInterceptor<T = void, K extends HttpInterceptorKey = HttpInterceptorKey>(
    method: K,
    request: Request,
    response?: Response | HttpError<unknown>,
  ): Promise<T> {
    let responseErrorData: T | null = null;

    const execInterceptor = async (interceptor: HttpInterceptor) => {
      const interceptorFn = interceptor[method];
      // @ts-ignore @TODO: Figure out how to dynamically pass parameters
      return interceptorFn ? ((await interceptorFn(request, response)) as Promise<T>) : null;
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