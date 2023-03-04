import { Routes } from '@core/values';
import { Icons } from '@shared/ui';

export const NavbarConfig = {
  categories: [
    {
      id: 0,
      name: 'Menu',
      items: [
        { id: 0, title: 'Home', routerPath: Routes.Home, icon: Icons.HOME, auth: '' },
        { id: 1, title: 'Catalog', routerPath: Routes.Catalog, icon: Icons.SAFARI, auth: '' },
      ],
    },
    {
      id: 1,
      name: 'Library',
      items: [
        { id: 0, title: 'Top Rated', routerPath: Routes.Home, icon: Icons.STAR, auth: '' },
        { id: 1, title: 'Recent', routerPath: Routes.Home, icon: Icons.TIME, auth: 'yes' },
        { id: 2, title: 'Watchlist', routerPath: Routes.Home, icon: Icons.ADD, auth: 'yes' },
        { id: 3, title: 'Completed', routerPath: Routes.Home, icon: Icons.CHECKED, auth: 'yes' },
      ],
    },
    {
      id: 2,
      name: 'General',
      items: [
        { id: 0, title: 'Profile', routerPath: Routes.Home, icon: Icons.USER, auth: 'yes' },
        { id: 1, title: 'Sign In', routerPath: Routes.SignIn, icon: Icons.EXIT, auth: 'no' },
      ],
    },
  ],
};
