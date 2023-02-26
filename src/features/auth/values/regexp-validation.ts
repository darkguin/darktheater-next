export enum RegexpValidation {
  Email = '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  LowercaseLetterContains = '(?=.*[a-z])',
  UppercaseLetterContains = '(?=.*[A-Z])',
  NumberContains = '(?=.*[0-9])',
  SpecialCharacterContains = '(?=.*[!@#$%^&])',
}
