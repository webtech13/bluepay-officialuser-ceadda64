
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserData {
  fullName?: string;
  email?: string;
  profileImage?: string;
}

type ThemeMode = 'dark' | 'light' | 'system' | 'white';

interface UserState {
  userData: UserData | null;
  userPin: string;
  themeMode: ThemeMode;
  setUserData: (data: UserData) => void;
  setUserPin: (pin: string) => void;
  setThemeMode: (mode: ThemeMode) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userData: null,
      userPin: '',
      themeMode: 'light',
      setUserData: (data) => set((state) => ({
        userData: { ...state.userData, ...data }
      })),
      setUserPin: (pin) => set({ userPin: pin }),
      setThemeMode: (mode) => set({ themeMode: mode }),
      clearUserData: () => set({ userData: null, userPin: '' }),
    }),
    {
      name: 'bluepay-user-storage',
    }
  )
);
