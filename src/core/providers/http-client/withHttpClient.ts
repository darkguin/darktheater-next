import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

const httpClient = axios.create({
  baseURL: BASE_URL,
});

export function withHttpClient() {
  return httpClient;
}
