import { Route } from '@core/values';
import { CatalogType, CatalogTypeList } from '@features/catalog';
import { defineMiddleware } from '@shared/middleware';
import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';

export const CatalogMiddleware = defineMiddleware({
  global: false,
  paths: [Route.Catalog],
  handler(req: NextRequest) {
    const redirectUrl = new NextURL(req.url);
    const catalogType = redirectUrl.searchParams.get('type') as CatalogType;

    if (CatalogTypeList.includes(catalogType)) return;

    redirectUrl.searchParams.set('type', CatalogType.Movies);
    return NextResponse.redirect(redirectUrl);
  },
});