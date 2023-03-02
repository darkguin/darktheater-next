import './FontIcon.scss';

import { Icons } from '@shared/ui';
import clsx from 'clsx';

interface Props {
  name: Icons;
}

export default function FontIcon({ name }: Props) {
  return <i className={clsx('icon', name)}></i>;
}
