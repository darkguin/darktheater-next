import '@styles/globals.scss';
import './layout.scss';

import { StorageKey } from '@core/values';
import { NavbarSize } from '@features/navbar';
import Navbar from '@features/navbar/components/Navbar/Navbar';
import { useAuthStore } from '@processes/auth';
import { cookies } from 'next/headers';
import type { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  const navbarSize = cookies().get(StorageKey.NavbarSize)?.value as NavbarSize;
  const authorized = Boolean(cookies().get(StorageKey.AccessToken)?.value);

  useAuthStore.setState({ authorized });

  return (
    <div className="main-layout">
      <Navbar defaultSize={navbarSize} />
      <main className="main-layout__page">{children}</main>
    </div>
  );
}
