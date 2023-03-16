import jwtDecode from 'jwt-decode';

export function decodeJwt<T>(token: string): T | null {
  try {
    return jwtDecode<T>(token);
  } catch (err) {
    console.error('Unexpected situation: Bad JWT token.');
  }
  return null;
}
