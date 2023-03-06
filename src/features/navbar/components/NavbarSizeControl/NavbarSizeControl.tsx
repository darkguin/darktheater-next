import './NavbarSizeControl.scss';

import { NavbarSize } from '@features/navbar';
import { FontIcon, Icons } from '@shared/ui';
import clsx from 'clsx';

interface Props {
  size?: NavbarSize;
  className?: string;
  onResize?: (type: NavbarSize) => void;
}

function NavbarSizeControl({ size = NavbarSize.BIG, onResize = () => {}, className }: Props) {
  return (
    <div className={clsx('navbar-size-control', className)}>
      {size === NavbarSize.BIG ? (
        <div className="navbar-size-control__button" onClick={() => onResize(NavbarSize.SMALL)}>
          <FontIcon name={Icons.LEFT_ARROW_1} />
        </div>
      ) : (
        <div className="navbar-size-control__button" onClick={() => onResize(NavbarSize.BIG)}>
          <FontIcon name={Icons.RIGHT_ARROW_1} />
        </div>
      )}
    </div>
  );
}

export default NavbarSizeControl;
