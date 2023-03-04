import './FontIcon.scss';

import { Icons } from '@shared/ui';
import clsx from 'clsx';

interface Props {
  name: Icons;
  className?: string;
}

export default function FontIcon({ name, className }: Props) {
  return <i className={clsx('icon', name)}></i>;
}
