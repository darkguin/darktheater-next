'use client';

import { useAuth } from '@processes/auth';
import { PropsWithChildren, useEffect, useState } from 'react';

function WithoutAuth({ children }: PropsWithChildren) {
  const { authorized } = useAuth();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(!authorized);
  }, [authorized]);

  return <>{isVisible ? children : null}</>;
}

export default WithoutAuth;