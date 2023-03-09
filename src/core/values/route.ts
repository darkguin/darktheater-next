export enum Route {
  Home = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  ResetPassword = '/reset-password',
  Confirmation = '/confirm',
  Catalog = '/catalog',
  Profile = '/profile',
  Movie = '/movie/:id',
  Serial = '/serial/:id',
}

export const RoutesList = Object.values(Route);