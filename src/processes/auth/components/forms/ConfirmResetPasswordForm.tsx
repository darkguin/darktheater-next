'use client';

import { Routes } from '@core/values';
import { ConfirmationType } from '@entities/confirmation';
import { Credentials } from '@entities/session';
import { AuthForm, AuthFormType } from '@features/auth';
import { useLoader } from '@features/loader';
import { ConfirmMessages, useConfirmation } from '@processes/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

const NOTIFICATION_DURATION = 8000;

function ConfirmResetPasswordForm() {
  const router = useRouter();
  const query = useSearchParams();

  const { setLoading } = useLoader();
  const { confirmAction: confirmActionRaw } = useConfirmation();

  const token = query.get('token') ?? '';
  const confirmationType = query.get('type') ?? '';

  useEffect(() => {
    if (token && confirmationType && confirmationType !== ConfirmationType.PasswordChange) {
      confirmAction(confirmationType as ConfirmationType, token, ConfirmMessages.Success);
    }
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
      toast.success(msg, { duration: NOTIFICATION_DURATION });
    } catch {
      toast.error(ConfirmMessages.Error, { duration: NOTIFICATION_DURATION });
    } finally {
      setLoading(false);
      router.push(Routes.SignIn);
    }
  };

  const onPasswordFormSubmit = async ({ password }: Credentials) => {
    const message = ConfirmMessages.ResetPasswordSuccess;
    await confirmAction(ConfirmationType.PasswordChange, token, message, password);
  };

  return <AuthForm type={AuthFormType.ConfirmResetPassword} onFormSubmit={onPasswordFormSubmit} />;
}

export default ConfirmResetPasswordForm;