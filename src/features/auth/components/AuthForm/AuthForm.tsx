'use client';

import './AuthForm.scss';

import { Routes } from '@core/values';
import { Credentials } from '@entities/session';
import { AuthFormConfig, AuthFormType, RegexpValidation, ValidationMessages } from '@features/auth';
import { useLoader } from '@features/loader';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@shared/ui/TextField';
import clsx from 'clsx';
import Link from 'next/link';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

type Props = {
  type: AuthFormType;
  onFormSubmit: (data: Credentials, reset: () => void) => void;
};

const AuthForm: FC<Props> = function ({ type, onFormSubmit }) {
  const { isLoading } = useLoader();

  const config = AuthFormConfig[type];

  const emailSchema = string()
    .required(ValidationMessages.required)
    .matches(new RegExp(RegexpValidation.Email), ValidationMessages.email);

  const usernameSchema = string()
    .required(ValidationMessages.required)
    .min(3, ValidationMessages.min);

  const passwordSchema = string()
    .required(ValidationMessages.required)
    .min(8, ValidationMessages.min)
    .matches(new RegExp(RegexpValidation.NumberContains), ValidationMessages.numberContains)
    .matches(new RegExp(RegexpValidation.UppercaseLetterContains), ValidationMessages.upperCase)
    .matches(new RegExp(RegexpValidation.LowercaseLetterContains), ValidationMessages.lowerCase);

  const schema = object({
    email: config.emailControl ? emailSchema : string(),
    username: config.usernameControl ? usernameSchema : string(),
    password: config.passwordControl ? passwordSchema : string(),
  }).required();

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
          <Link href={Routes.ResetPassword} className="form__link title-regular-1">
            Forgot password?
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
};

export default memo(AuthForm);