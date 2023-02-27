'use client';

import './TextField.scss';

import { FontIcon, Icons } from '@shared/ui/FontIcon';
import { FieldState } from '@shared/ui/TextField';
import clsx from 'clsx';
import React, {
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  memo,
  useEffect,
  useState,
} from 'react';

type Props = {
  type?: HTMLInputTypeAttribute;
  state?: FieldState;
  className?: string;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

type FCRef = ForwardRefRenderFunction<HTMLInputElement, Props>;

const TextField: FCRef = function ({ type, state, className, onFocus, onBlur, ...rest }, ref) {
  const [isFocused, setFocusState] = useState<boolean>(false);
  const [isShowPassword, setPasswordVisibility] = useState<boolean>(false);

  const [isPasswordFiled, setIsPasswordState] = useState<boolean>(false);
  const [isSearchFiled, setIsSearchState] = useState<boolean>(false);

  useEffect(() => {
    setIsPasswordState(type === 'password');
    setIsSearchState(type === 'search');
  }, [type]);

  const bindStateClass = () => ({
    'text-field--focus': isFocused,
    'text-field--error': state?.invalid && state?.isDirty,
    'text-field--valid': !state?.invalid && state?.isDirty,
    'text-field--dirty': state?.isDirty,
    'text-field--touched': state?.isTouched,
    'text-field--with-control': isPasswordFiled || isSearchFiled,
  });

  const onHidePassword = () => setPasswordVisibility(!isShowPassword);

  const onFocusChanged = (e: FocusEvent<HTMLInputElement>, state: boolean) => {
    state ? onFocus?.(e) : onBlur?.(e);
    setFocusState(state);
  };

  return (
    <>
      <div className={clsx('text-field__wrapper', className)}>
        {isPasswordFiled ? (
          <div className={clsx('text-field__control', bindStateClass())} onClick={onHidePassword}>
            <FontIcon name={isShowPassword ? Icons.HIDDEN : Icons.SHOW} />
          </div>
        ) : null}

        <input
          ref={ref}
          className={clsx('text-field', bindStateClass())}
          type={isPasswordFiled ? (isShowPassword ? 'text' : 'password') : type}
          onFocus={(e) => onFocusChanged(e, true)}
          onBlur={(e) => onFocusChanged(e, false)}
          {...rest}
        />
      </div>

      {!!state?.error?.message ? (
        <div className="text-field__error-msg title-regular-0">{state.error.message}</div>
      ) : null}
    </>
  );
};

export default memo(forwardRef<HTMLInputElement, Props>(TextField));
