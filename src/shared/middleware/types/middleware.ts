import { NextRequest, NextResponse } from 'next/server';

export interface Middleware {
  /**
   * @property global
   * @description - Allows you to apply middleware to all page routes. If true,
   * the set of routes from 'paths' property will be ignored.
   * @default - true
   */
  global: boolean;
  /**
   * @property paths
   * @description - Allows you to apply middleware to a specific set of pages.
   * Ignored if global property is true
   * @example - ['/home', '/sign-in']
   * @default - []
   */
  paths: string[];
  /**
   * @method handler
   * @description - Allows you to process the route. Return a new NextResponse
   * if you need to redirect or overwrite the route, or do not return anything
   * if actions on the route are not required
   */
  handler: MiddlewareFn;
}

export type MiddlewareFn = (req: NextRequest, res: NextResponse) => NextResponse | void;