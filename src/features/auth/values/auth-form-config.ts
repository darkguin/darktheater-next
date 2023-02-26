import {
  ConfirmPageStrings as ConfirmT,
  ResetPasswordPageStrings as RPasswordT,
  SignInPageStrings as SignInT,
  SignUpPageStrings as SignUpT,
} from '@core/dictionaries';

import { AuthFormType } from './auth-form-type';

export const AuthFormConfig = {
  [AuthFormType.SignIn]: {
    btnName: SignInT.form.submit,
    usernameControl: false,
    emailControl: true,
    passwordControl: true,
  },
  [AuthFormType.SignUp]: {
    btnName: SignUpT.form.submit,
    usernameControl: true,
    emailControl: true,
    passwordControl: true,
  },
  [AuthFormType.ResetPassword]: {
    btnName: RPasswordT.form.submit,
    usernameControl: false,
    emailControl: true,
    passwordControl: false,
  },
  [AuthFormType.ConfirmResetPassword]: {
    btnName: ConfirmT.form.submit,
    usernameControl: false,
    emailControl: false,
    passwordControl: true,
  },
};
