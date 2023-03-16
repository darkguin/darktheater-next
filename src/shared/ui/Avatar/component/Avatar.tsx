'use client';

import './Avatar.scss';

import clsx from 'clsx';
import Image from 'next/image';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { generateInitials } from '../utils/generateInitials';

interface Props {
  text?: string;
  image?: string;
  width?: string;
  height?: string;
  variant?: 'circle' | 'rounded' | 'square';
}

function Avatar({
  text = '',
  image = '',
  width = '100%',
  height = '100%',
  variant = 'circle',
  children,
}: PropsWithChildren<Props>) {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<string>('1rem');

  const initials = generateInitials(text);
  const classNames = clsx('avatar', `avatar--${variant}`);

  const onAvatarResized = ([{ contentRect }]: ResizeObserverEntry[]) => {
    setFontSize(contentRect.height / 42 + 'rem');
  };

  useEffect(() => {
    if (avatarRef.current) {
      const observer = new ResizeObserver(onAvatarResized);
      observer.observe(avatarRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div ref={avatarRef} className={classNames} style={{ height, width, fontSize }}>
      {image ? <Image src={image} alt="avatar" fill sizes="138px" /> : initials}
      {children}
    </div>
  );
}

export default Avatar;
