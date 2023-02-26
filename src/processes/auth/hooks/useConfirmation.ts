import { ConfirmationType, useConfirmationApi } from '@entities/confirmation';

export function useConfirmation() {
  const { confirmEmail, confirmAccountDeletion, confirmResetPassword } = useConfirmationApi();

  const confirmEmailAction = async (token: string): Promise<ConfirmationType> => {
    return await confirmEmail(token).then(() => ConfirmationType.EmailVerification);
  };

  const confirmAccountDeletionAction = async (token: string): Promise<ConfirmationType> => {
    return await confirmAccountDeletion(token).then(() => ConfirmationType.AccountDeletion);
  };

  const confirmResetPasswordAction = async (
    password: string,
    token: string,
  ): Promise<ConfirmationType> => {
    return await confirmResetPassword(password, token).then(() => ConfirmationType.PasswordChange);
  };

  const confirmAction = async (type: ConfirmationType, token: string, payload?: string) => {
    switch (type) {
      case ConfirmationType.EmailVerification:
        return await confirmEmailAction(token);
      case ConfirmationType.PasswordChange:
        return await confirmResetPasswordAction(payload || '', token);
      case ConfirmationType.AccountDeletion:
        return await confirmAccountDeletionAction(token);
    }
  };

  return { confirmAction };
}