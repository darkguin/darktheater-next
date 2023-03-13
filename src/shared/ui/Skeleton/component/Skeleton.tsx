import './Skeleton.scss';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export interface SkeletonProps {
  animated?: boolean;
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

function Skeleton({
  animated = false,
  width = '100%',
  height = '100%',
  borderRadius = '12px',
  className,
  children,
}: PropsWithChildren<SkeletonProps>) {
  const style = { width, height, borderRadius };

  return (
    <div className={clsx('skeleton', animated && 'skeleton--animated', className)} style={style}>
      {children}
    </div>
  );
}

export default Skeleton;