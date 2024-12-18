import { create } from "zustand";

export const userStore = create((set) => ({
    users: [],
    setUsers: (users) => set({ users }),
}))