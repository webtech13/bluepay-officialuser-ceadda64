
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserData {
  fullName?: string;
  email?: string;
  profileImage?: string;
}

interface UserState {
  userData: UserData | null;
  userPin: string;
  setUserData: (data: UserData) => void;
  setUserPin: (pin: string) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userData: null,
      userPin: '',
      setUserData: (data) => set((state) => ({
        userData: { ...state.userData, ...data }
      })),
      setUserPin: (pin) => set({ userPin: pin }),
      clearUserData: () => set({ userData: null, userPin: '' }),
    }),
    {
      name: 'bluepay-user-storage',
    }
  )
);
