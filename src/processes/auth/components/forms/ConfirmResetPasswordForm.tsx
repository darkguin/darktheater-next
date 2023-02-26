'use client';

import { Routes } from '@core/values';
import { ConfirmationType } from '@entities/confirmation';
import { Credentials } from '@entities/session';
import { AuthForm, AuthFormType } from '@features/auth';
import { useLoader } from '@features/loader';
import { ConfirmMessages, useConfirmation } from '@processes/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, memo, useEffect } from 'react';
import { toast } from 'sonner';

const ConfirmResetPasswordForm: FC = function () {
  const router = useRouter();
  const query = useSearchParams();

  const { setLoading } = useLoader();
  const { confirmAction: confirmActionRaw } = useConfirmation();

  let token = query.get('token') || '';
  let confirmationType = query.get('type') || '';

  useEffect(() => {
    if (!confirmationType || !token) return () => {};
    if (confirmationType === ConfirmationType.PasswordChange) return () => {};

    confirmAction(confirmationType as ConfirmationType, token, ConfirmMessages.Success);
  });

  const confirmAction = async (
    type: ConfirmationType,
    token: string,
    msg: string,
    payload?: string,
  ) => {
    try {
      setLoading(true);
      await confirmActionRaw(confirmationType as ConfirmationType, token, payload);
      toast.success(msg, { duration: 80000 });
    } catch {
      toast.error(ConfirmMessages.Error, { duration: 80000 });
    } finally {
      setLoading(false);
      router.push(Routes.SignIn);
    }
  };

  const onPasswordFormSubmit = async ({ password }: Credentials) => {
    const message = ConfirmMessages.ResetPasswordSuccess;
    await confirmAction(ConfirmationType.PasswordChange, token, message, password);
  };

  return (
    <>
      <AuthForm type={AuthFormType.ConfirmResetPassword} onFormSubmit={onPasswordFormSubmit} />
    </>
  );
};

export default memo(ConfirmResetPasswordForm);