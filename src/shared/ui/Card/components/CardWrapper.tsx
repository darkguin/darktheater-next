import clsx from 'clsx';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
  href?: string;
}

function CardWrapper({ className, href, children }: PropsWithChildren<Props>) {
  return href ? (
    <Link href={href} className={clsx(className)}>
      {children}
    </Link>
  ) : (
    <div className={clsx(className)}>{children}</div>
  );
}

export default CardWrapper;