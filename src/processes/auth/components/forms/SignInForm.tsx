'use client';

import { Routes } from '@core/values';
import { ConfirmationType } from '@entities/confirmation';
import { Credentials } from '@entities/session';
import { AuthForm, AuthFormType } from '@features/auth';
import { useLoader } from '@features/loader';
import { SignInModal, useAuth } from '@processes/auth';
import { ApiErrorCodes, HttpErrorResponse } from '@providers/http-client';
import { useModal } from '@shared/ui/ModalView';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SignInForm() {
  const router = useRouter();
  const { setLoading } = useLoader();
  const { signIn, sendConfirmEmail } = useAuth();
  const { isOpen, openModal, closeModal } = useModal();

  const [formData, setFormData] = useState<Credentials>();

  const onCloseModal = () => closeModal();

  const onSubmitError = async ({ error_code }: HttpErrorResponse, email: string) => {
    if (error_code !== ApiErrorCodes.UserInactive) return;
    await sendConfirmEmail(ConfirmationType.EmailVerification, false, email);
    openModal();
  };

  const onSubmit = async (credentials: Credentials, resetForm: () => void) => {
    setLoading(true);
    setFormData(credentials);

    try {
      await signIn(credentials);

      resetForm();
      await router.push(Routes.Home);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        if (!e.response) return;
        await onSubmitError(e.response.data, credentials.email ?? '');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthForm type={AuthFormType.SignIn} onFormSubmit={onSubmit} />

      <SignInModal
        isOpen={isOpen}
        email={formData?.email ?? ''}
        maxWidth="600px"
        onAccept={onCloseModal}
        onClose={onCloseModal}
      />
    </>
  );
}

export default SignInForm;