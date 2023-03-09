import './Skeleton.scss';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  animated?: boolean;
  width?: string;
  height?: string;
  borderRadius?: string;
}

function Skeleton({
  animated = false,
  width = '100%',
  height = '100%',
  borderRadius = '12px',
  children,
}: PropsWithChildren<Props>) {
  const style = { width, height, borderRadius };

  return (
    <div className={clsx('skeleton', animated && 'skeleton--animated')} style={style}>
      {children}
    </div>
  );
}

export default Skeleton;