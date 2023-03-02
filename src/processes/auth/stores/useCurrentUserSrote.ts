import { User } from '@entities/user';
import { create } from 'zustand';

interface UserState {
  currentUser: User | null;
  setCurrentUser: (value: User | null) => void;
}

export const useCurrentUserStore = create<UserState>((set) => ({
  currentUser: null,
  setCurrentUser: (value: User | null) => set(() => ({ currentUser: value })),
}));