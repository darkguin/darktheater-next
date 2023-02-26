import './FontIcon.scss';

import { Icons } from '@shared/ui';
import clsx from 'clsx';
import { FC } from 'react';

type Props = { name: Icons };

const FontIcon: FC<Props> = function ({ name }) {
  return (
    <>
      <i className={clsx('icon', name)}></i>
    </>
  );
};

export default FontIcon;
