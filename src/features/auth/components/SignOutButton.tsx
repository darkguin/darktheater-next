'use client';

import { Route } from '@core/values';
import { useAuth } from '@processes/auth';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

function SignOutButton({ className, children }: PropsWithChildren<Props>) {
  const router = useRouter();
  const { signOut } = useAuth();

  const onSignOut = async () => {
    await signOut();

    router.refresh();
    router.push(Route.SignIn);
  };

  return (
    <button className={clsx(className)} onClick={() => onSignOut()}>
      {children}
    </button>
  );
}

export default SignOutButton;
