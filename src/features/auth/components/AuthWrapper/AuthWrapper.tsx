import './AuthWrapper.scss';

import { Routes } from '@core/values';
import { ReactNode } from 'react';

export function AuthWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="auth-wrapper">
      <div id="auth-wrapper" className="auth-wrapper__container">
        <div className="auth-wrapper__header">
          <a href={Routes.Home} className="auth-wrapper__logo title-bold-4"></a>
        </div>

        <div className="auth-wrapper__main">{children}</div>
      </div>
    </main>
  );
}
