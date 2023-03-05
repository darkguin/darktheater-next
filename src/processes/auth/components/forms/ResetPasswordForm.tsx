'use client';

import { Route } from '@core/values';
import { ConfirmationType } from '@entities/confirmation';
import { Credentials } from '@entities/session';
import { AuthForm, AuthFormType } from '@features/auth';
import { useLoader } from '@features/loader';
import { useAuth } from '@processes/auth';
import { useRouter } from 'next/navigation';

function ResetPasswordForm() {
  const router = useRouter();
  const { setLoading } = useLoader();
  const { sendConfirmEmail } = useAuth();

  const onSubmit = async ({ email }: Credentials, resetForm: () => void) => {
    setLoading(true);

    try {
      await sendConfirmEmail(ConfirmationType.PasswordChange, false, email);

      resetForm();
      setLoading(false);

      await router.push(Route.SignIn);
    } catch {
      setLoading(false);
    }
  };

  return <AuthForm type={AuthFormType.ResetPassword} onFormSubmit={onSubmit} />;
}

export default ResetPasswordForm;