'use client';

import './Navbar.scss';

import { AppStrings as AppT } from '@core/dictionaries';
import { Route } from '@core/values';
import { NavbarSize } from '@features/navbar';
import { useNavbarSize } from '@features/navbar/hooks';
import { NavbarConfig } from '@features/navbar/values/navbar-config';
import { useAuthStore } from '@processes/auth';
import { FontIcon } from '@shared/ui';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import NavbarLogo from '../NavbarLogo/NavbarLogo';
import NavbarSizeControl from '../NavbarSizeControl/NavbarSizeControl';
import NavbarVisibilityControl from '../NavbarVisibilityControl/NavbarVisibilityControl';

const CATEGORIES = NavbarConfig.categories;
const CATEGORIES_COUNT = CATEGORIES.length - 1;

interface Props {
  defaultSize?: NavbarSize;
  authorized?: boolean;
}

function Navbar({ defaultSize, authorized = false }: Props) {
  const router = useRouter();
  const { navbarSize, setNavbarSize } = useNavbarSize(defaultSize);

  const [isOpen, setIsOpen] = useState(false);

  const isShort = navbarSize === NavbarSize.SMALL;
  const isAuth = authorized || useAuthStore.getState().authorized;

  const onItemClick = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  const isShowItem = (auth: string) => {
    return (auth === 'yes' && isAuth) || (auth === 'no' && !isAuth) || !auth;
  };

  return (
    <nav
      className={clsx(
        'nav-bar title-semi-bold-1',
        isOpen && 'nav-bar--open',
        isShort && 'nav-bar--short',
      )}
    >
      <header className="nav-bar__header">
        <NavbarLogo href={Route.Home} text={AppT.name} variant={!isShort ? 'text' : 'image'} />

        <NavbarSizeControl
          className="nav-bar__size-control"
          size={navbarSize}
          onResize={setNavbarSize}
        />

        <NavbarVisibilityControl
          isOpen={isOpen}
          className="nav-bar__visibility-control"
          onVisibilityChanged={setIsOpen}
        />
      </header>

      <div className="nav-bar__categories">
        {CATEGORIES.map((category, i) => (
          <div
            key={category.id}
            className={clsx(
              'nav-bar__category',
              i === CATEGORIES_COUNT && 'nav-bar__category--last',
            )}
          >
            <div className="nav-bar__category-title">{category.name}</div>

            <div className="nav-bar__category-items">
              {category.items.map((item) =>
                isShowItem(item.auth) ? (
                  <div
                    key={item.id}
                    className="nav-bar__item"
                    onClick={() => onItemClick(item.routerPath)}
                  >
                    <div className="nav-bar__item-icon">
                      <FontIcon name={item.icon} />
                    </div>

                    <div className="nav-bar__item-title">{item.title}</div>
                  </div>
                ) : null,
              )}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
