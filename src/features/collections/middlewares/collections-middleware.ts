import { Route } from '@core/values';
import { CollectionType, CollectionTypeList } from '@entities/collection';
import { defineMiddleware } from '@shared/middleware';
import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';

export const CollectionsMiddleware = defineMiddleware({
  global: false,
  paths: [Route.Collections],
  handler(req: NextRequest) {
    const redirectUrl = new NextURL(req.url);
    const type = redirectUrl.searchParams.get('type') as CollectionType;

    if (CollectionTypeList.includes(type)) return;

    redirectUrl.searchParams.set('type', CollectionType.Favorite);
    return NextResponse.redirect(redirectUrl);
  },
});