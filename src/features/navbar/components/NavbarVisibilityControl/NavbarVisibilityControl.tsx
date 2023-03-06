import './NavbarVisibilityControl.scss';

import clsx from 'clsx';

interface Props {
  isOpen: boolean;
  className?: string;
  onVisibilityChanged?: (isOpen: boolean) => void;
}

function NavbarVisibilityControl({ isOpen, onVisibilityChanged = () => {}, className }: Props) {
  return (
    <div
      className={clsx(
        'navbar-visibility-control',
        isOpen && 'navbar-visibility-control--open',
        className,
      )}
      onClick={() => onVisibilityChanged(!isOpen)}
    >
      <div className="navbar-visibility-control__path"></div>
    </div>
  );
}

export default NavbarVisibilityControl;
