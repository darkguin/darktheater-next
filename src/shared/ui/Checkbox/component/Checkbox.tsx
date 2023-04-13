import './Checkbox.scss';

import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Props = {
  className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Checkbox({ className, ...rest }: Props) {
  return (
    <label className={clsx('checkbox__label', className)}>
      <input type="checkbox" className="checkbox__input" {...rest} />
      <span className="checkbox"></span>
    </label>
  );
}

export default Checkbox;
