import { Middleware } from '@shared/middleware/types/middleware';

export function defineMiddleware({ global, paths, handler }: Partial<Middleware>): Middleware {
  const defaultInstance = { global: true, paths: [], handler: () => null };

  return {
    handler: handler || defaultInstance.handler,
    global: global || defaultInstance.global,
    paths: paths || defaultInstance.paths,
  } as Middleware;
}