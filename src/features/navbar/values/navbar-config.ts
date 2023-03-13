import { Route } from '@core/values';
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
        { id: 1, title: 'Recent', routerPath: Route.Home, icon: Icons.TIME, auth: 'yes' },
        { id: 2, title: 'Watchlist', routerPath: Route.Home, icon: Icons.ADD, auth: 'yes' },
        { id: 3, title: 'Completed', routerPath: Route.Home, icon: Icons.CHECKED, auth: 'yes' },
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
