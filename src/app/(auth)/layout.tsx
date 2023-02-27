import '@styles/globals.scss';
import './layout.scss';

import { AuthWrapper } from '@features/auth';
import type { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="auth-layout">
      <AuthWrapper>{children}</AuthWrapper>
    </div>
  );
}
