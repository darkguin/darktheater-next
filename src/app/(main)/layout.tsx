import '@styles/globals.scss';
import './layout.scss';

import Navbar from '@features/navbar/components/Navbar/Navbar';
import type { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-layout__page">{children}</main>
    </div>
  );
}
