import { ConfirmationType, useConfirmationApi } from '@entities/confirmation';

export function useConfirmation() {
  const { confirmEmail, confirmAccountDeletion, confirmResetPassword } = useConfirmationApi();

  const confirmEmailAction = (token: string): Promise<ConfirmationType> => {
    return confirmEmail(token).then(() => ConfirmationType.EmailVerification);
  };

  const confirmAccountDeletionAction = (token: string): Promise<ConfirmationType> => {
    return confirmAccountDeletion(token).then(() => ConfirmationType.AccountDeletion);
  };

  const confirmResetPasswordAction = (
    password: string,
    token: string,
  ): Promise<ConfirmationType> => {
    return confirmResetPassword(password, token).then(() => ConfirmationType.PasswordChange);
  };

  const confirmAction = (type: ConfirmationType, token: string, payload?: string) => {
    switch (type) {
      case ConfirmationType.EmailVerification:
        return confirmEmailAction(token);
      case ConfirmationType.PasswordChange:
        return confirmResetPasswordAction(payload || '', token);
      case ConfirmationType.AccountDeletion:
        return confirmAccountDeletionAction(token);
    }
  };

  return { confirmAction };
}