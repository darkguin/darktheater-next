import './AuthWrapper.scss';

import { AppStrings as t } from '@core/dictionaries';
import { Routes } from '@core/values';
import { useLoader } from '@features/loader';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const AuthWrapper: FC<PropsWithChildren> = function ({ children }) {
  const { isLoading } = useLoader();

  return (
    <main className="auth-wrapper">
      <div className={clsx('auth-wrapper__container', isLoading && 'border-spinner')}>
        <div className="auth-wrapper__header">
          <a href={Routes.Home} className="auth-wrapper__logo title-bold-4">
            {t.title}
          </a>
        </div>

        <div className="auth-wrapper__main">{children}</div>
      </div>
    </main>
  );
};
