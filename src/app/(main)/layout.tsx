import '@styles/globals.scss';
import './layout.scss';

import { StorageKey } from '@core/values';
import { NavbarSize } from '@features/navbar';
import Navbar from '@features/navbar/components/Navbar/Navbar';
import { cookies } from 'next/headers';
import type { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  const getNavbarSize = () => {
    return cookies().get(StorageKey.NavbarSize)?.value as NavbarSize;
  };

  return (
    <div className="main-layout">
      <Navbar defaultSize={getNavbarSize()} />
      <main className="main-layout__page">{children}</main>
    </div>
  );
}
