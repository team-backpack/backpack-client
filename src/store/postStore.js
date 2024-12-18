import { create } from "zustand";

export const postStore = create((set) => ({
    posts: [],
    setPosts: (posts) => set({ posts })
}))