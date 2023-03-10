import { create } from 'zustand';

interface AuthState {
  authorized: boolean;
  setAuthorizedStatus: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  authorized: false,
  setAuthorizedStatus: (value: boolean) => set(() => ({ authorized: value })),
}));