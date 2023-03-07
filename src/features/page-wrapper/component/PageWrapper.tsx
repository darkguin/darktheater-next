'use client';

import './PageWrapper.scss';

import { FontIcon, Icons } from '@shared/ui';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, useState } from 'react';

interface Props {
  sidebar?: ReactNode;
}

function PageWrapper({ sidebar, children }: PropsWithChildren<Props>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onSidebarVisibilityChange = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="page">
      <div className={clsx('page__container', !sidebar && 'page--without-sidebar')}>
        <div className="page__main">{children}</div>

        {sidebar ? (
          <>
            <div className={clsx('page__sidebar', isSidebarOpen && 'active')}>{sidebar}</div>

            <button
              className="page__sidebar-control btn btn--short btn--secondary"
              onClick={onSidebarVisibilityChange}
            >
              <FontIcon name={isSidebarOpen ? Icons.CLOSE : Icons.MENU} />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default PageWrapper;
