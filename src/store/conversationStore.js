import { create } from "zustand";

export const conversationStore = create((set) => ({
    messages: [],
    setMessages: (messages) => set({ messages }),

    conversations: [],
    setConversations: (conversations) => set({ conversations })
}))