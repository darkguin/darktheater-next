'use client';

import { Route } from '@core/values';
import { Credentials } from '@entities/session';
import { AuthForm, AuthFormType } from '@features/auth';
import { useLoader } from '@features/loader';
import { SignUpModal, useAuth } from '@processes/auth';
import { useModal } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SignUpForm() {
  const router = useRouter();
  const { signUp } = useAuth();
  const { setLoading } = useLoader();
  const { isOpen, openModal, closeModal } = useModal();

  const [formData, setFormData] = useState<Credentials>();

  const onCloseModal = () => {
    closeModal();
    router.push(Route.SignIn);
  };

  const onSubmit = async (credentials: Credentials, resetForm: () => void) => {
    setLoading(true);
    setFormData(credentials);

    try {
      await signUp(credentials);

      resetForm();
      setLoading(false);
      openModal();
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthForm type={AuthFormType.SignUp} onFormSubmit={onSubmit} />

      <SignUpModal
        isOpen={isOpen}
        email={formData?.email ?? ''}
        maxWidth="600px"
        onAccept={onCloseModal}
        onClose={onCloseModal}
      />
    </>
  );
}

export default SignUpForm;