
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserData {
  fullName?: string;
  email?: string;
  profileImage?: string;
}

interface Transaction {
  id: number;
  type: string;
  amount: string;
  date: string;
  status: 'Completed' | 'Processing' | 'Failed';
  recipient?: string;
}

type ThemeMode = 'dark' | 'light' | 'system' | 'white';

interface UserState {
  userData: UserData | null;
  userPin: string;
  themeMode: ThemeMode;
  balance: number;
  transactions: Transaction[];
  setUserData: (data: UserData) => void;
  setUserPin: (pin: string) => void;
  setThemeMode: (mode: ThemeMode) => void;
  clearUserData: () => void;
  updateBalance: (amount: number) => void;
  addTransaction: (transaction: Transaction) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userData: null,
      userPin: '',
      themeMode: 'light',
      balance: 200000, // Initial balance of 200,000
      transactions: [
        { id: 1, type: "Airtime", amount: "₦2,000", date: "Today, 10:42 AM", status: "Completed" },
        { id: 2, type: "Data Bundle", amount: "₦5,000", date: "Yesterday, 2:15 PM", status: "Completed" },
        { id: 3, type: "Electricity Bill", amount: "₦10,000", date: "Mar 28, 8:30 AM", status: "Processing" }
      ],
      setUserData: (data) => set((state) => ({
        userData: { ...state.userData, ...data }
      })),
      setUserPin: (pin) => set({ userPin: pin }),
      setThemeMode: (mode) => set({ themeMode: mode }),
      clearUserData: () => set({ userData: null, userPin: '' }),
      updateBalance: (amount) => set((state) => ({
        balance: state.balance + amount
      })),
      addTransaction: (transaction) => set((state) => ({
        transactions: [transaction, ...state.transactions]
      })),
    }),
    {
      name: 'bluepay-user-storage',
    }
  )
);
