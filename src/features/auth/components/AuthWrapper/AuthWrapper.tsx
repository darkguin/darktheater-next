'use client';

import './AuthWrapper.scss';

import { AppStrings as t } from '@core/dictionaries';
import { Routes } from '@core/values';
import { useLoader } from '@features/loader';
import clsx from 'clsx';
import Link from 'next/link';
import { FC, memo, PropsWithChildren } from 'react';

const AuthWrapper: FC<PropsWithChildren> = function ({ children }) {
  const { isLoading } = useLoader();

  return (
    <main className="auth-wrapper">
      <div className={clsx('auth-wrapper__container', isLoading && 'border-spinner')}>
        <div className="auth-wrapper__header">
          <Link href={Routes.Home} as={Routes.Home} className="auth-wrapper__logo title-bold-4">
            {t.name}
          </Link>
        </div>

        <div className="auth-wrapper__main">{children}</div>
      </div>
    </main>
  );
};

export default memo(AuthWrapper);
