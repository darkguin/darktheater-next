'use client';

import './AuthWrapper.scss';

import { AppStrings as t } from '@core/dictionaries';
import { Route } from '@core/values';
import { useLoader } from '@features/loader';
import clsx from 'clsx';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

function AuthWrapper({ children }: PropsWithChildren) {
  const { isLoading } = useLoader();

  return (
    <main className="auth-wrapper">
      <div className={clsx('auth-wrapper__container', isLoading && 'border-spinner')}>
        <div className="auth-wrapper__header">
          <Link href={Route.Home} as={Route.Home} className="auth-wrapper__logo title-bold-4">
            {t.name}
          </Link>
        </div>

        <div className="auth-wrapper__main">{children}</div>
      </div>
    </main>
  );
}

export default AuthWrapper;
