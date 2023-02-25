export enum ApiErrorCodes {
  Base = 'BaseError',
  InvalidCredentials = 'InvalidCredentials',
  NotFound = 'NotFound',
  AlreadyExists = 'AlreadyExists',
  UserInactive = 'UserInactive',
  AlreadyVerified = 'AlreadyVerified',
  Timeout = 'TimeoutError',
  InvalidToken = 'InvalidToken',
  TokenExpired = 'TokenExpired',
  RefreshTokenNotfound = 'RefreshTokenNotFound',
  AccessTokenExpired = 'AccessTokenExpired',
}
