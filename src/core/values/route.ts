export enum Route {
  Home = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  ResetPassword = '/reset-password',
  Confirmation = '/confirm',
  Catalog = '/catalog',
  Profile = '/profile',
  Collections = '/collections',
  Movie = '/movies/:id',
  Serial = '/serials/:id',
}

export const RoutesList = Object.values(Route);