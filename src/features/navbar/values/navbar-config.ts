import { Route } from '@core/values';
import { CollectionType } from '@entities/collection';
import { makeCollectionPath } from '@features/collections/utils';
import { Icons } from '@shared/ui';

export const NavbarConfig = {
  categories: [
    {
      id: 0,
      name: 'Menu',
      items: [
        { id: 0, title: 'Home', routerPath: Route.Home, icon: Icons.HOME, auth: '' },
        { id: 1, title: 'Catalog', routerPath: Route.Catalog, icon: Icons.SAFARI, auth: '' },
      ],
    },
    {
      id: 1,
      name: 'Library',
      items: [
        { id: 0, title: 'Top Rated', routerPath: Route.Home, icon: Icons.STAR, auth: '' },
        {
          id: 1,
          title: 'Favorite',
          routerPath: makeCollectionPath(CollectionType.Favorite),
          icon: Icons.TV,
          auth: 'yes',
        },
        {
          id: 2,
          title: 'Watchlist',
          routerPath: makeCollectionPath(CollectionType.WatchLater),
          icon: Icons.ADD,
          auth: 'yes',
        },
        {
          id: 3,
          title: 'Completed',
          routerPath: makeCollectionPath(CollectionType.Watched),
          icon: Icons.CHECKED,
          auth: 'yes',
        },
      ],
    },
    {
      id: 2,
      name: 'General',
      items: [
        { id: 0, title: 'Profile', routerPath: Route.Profile, icon: Icons.USER, auth: 'yes' },
        { id: 1, title: 'Sign In', routerPath: Route.SignIn, icon: Icons.EXIT, auth: 'no' },
      ],
    },
  ],
};
