import { string } from 'yup';

import { RegexpValidation } from './regexp-validation';
import { ValidationMessages } from './validation-messages';

export const EmailValidationSchema = string()
  .required(ValidationMessages.required)
  .matches(new RegExp(RegexpValidation.Email), ValidationMessages.email);

export const UsernameValidationSchema = string()
  .required(ValidationMessages.required)
  .min(3, ValidationMessages.min);

export const PasswordValidationSchema = string()
  .required(ValidationMessages.required)
  .min(8, ValidationMessages.min)
  .matches(new RegExp(RegexpValidation.NumberContains), ValidationMessages.numberContains)
  .matches(new RegExp(RegexpValidation.UppercaseLetterContains), ValidationMessages.upperCase)
  .matches(new RegExp(RegexpValidation.LowercaseLetterContains), ValidationMessages.lowerCase);