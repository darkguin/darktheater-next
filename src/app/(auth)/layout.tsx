import '@styles/globals.scss';
import './layout.scss';

import { AuthWrapper } from '@features/auth';
import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth-layout">
      <AuthWrapper>{children}</AuthWrapper>
    </div>
  );
}
