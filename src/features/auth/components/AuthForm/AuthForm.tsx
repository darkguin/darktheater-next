'use client';

import './AuthForm.scss';

import { SignInPageStrings as SignInT } from '@core/dictionaries';
import { Routes } from '@core/values';
import { Credentials } from '@entities/session';
import {
  AuthFormConfig,
  AuthFormType,
  EmailValidationSchema,
  PasswordValidationSchema,
  UsernameValidationSchema,
} from '@features/auth';
import { useLoader } from '@features/loader';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@shared/ui/TextField';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

interface Props {
  type: AuthFormType;
  onFormSubmit: (data: Credentials, reset: () => void) => void;
}

function AuthForm({ type, onFormSubmit }: Props) {
  const { isLoading } = useLoader();

  const [config] = useState(AuthFormConfig[type]);
  const [schema] = useState(() => {
    return object({
      email: config.emailControl ? EmailValidationSchema : string(),
      username: config.usernameControl ? UsernameValidationSchema : string(),
      password: config.passwordControl ? PasswordValidationSchema : string(),
    }).required();
  });

  const { formState, register, handleSubmit, getFieldState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data: Credentials) => {
    onFormSubmit?.(data, reset);
  };

  return (
    <form className={clsx('form', isLoading && 'form--loading')} onSubmit={handleSubmit(onSubmit)}>
      {config.usernameControl ? (
        <TextField
          className="form__control"
          placeholder="username"
          type="text"
          state={getFieldState('username', formState)}
          {...register('username')}
        />
      ) : null}

      {config.emailControl ? (
        <TextField
          className="form__control"
          placeholder="Email"
          type="email"
          state={getFieldState('email', formState)}
          {...register('email')}
        />
      ) : null}

      {config.passwordControl ? (
        <TextField
          className="form__control"
          placeholder="Password"
          type="password"
          state={getFieldState('password', formState)}
          {...register('password')}
        />
      ) : null}

      {type === AuthFormType.SignIn ? (
        <div className="form__control form__container f-end">
          <Link
            href={Routes.ResetPassword}
            as={Routes.ResetPassword}
            className="form__link title-regular-1"
          >
            {SignInT.form['to-password-reset-link']}
          </Link>
        </div>
      ) : null}

      <div className="form__container">
        <button className="form__btn btn btn--contrast" type="submit" disabled={!formState.isValid}>
          {config.btnName}
        </button>
      </div>
    </form>
  );
}

export default AuthForm;