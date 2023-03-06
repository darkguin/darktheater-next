import './NavbarLogo.scss';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  text?: string;
  href?: string;
  variant?: 'text' | 'image';
}

function NavbarLogo({ text = '', href = '#', variant = 'text' }: Props) {
  const isText = variant === 'text';

  return (
    <Link
      href={href}
      className={clsx('navbar-logo title-bold-4', !isText && 'navbar-logo--with-image')}
    >
      {isText ? (
        text
      ) : (
        <Image
          width={35}
          height={35}
          src="/images/logo.svg"
          alt={text}
          className="navbar-logo__image"
        />
      )}
    </Link>
  );
}

export default NavbarLogo;
