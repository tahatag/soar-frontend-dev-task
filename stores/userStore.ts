import { AccountData } from "@/lib/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  user: AccountData | null;
  setUser: (data: AccountData) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (data) => set(() => ({ user: data })),
      }),
      {
        name: "user-storage",
      }
    )
  )
);
