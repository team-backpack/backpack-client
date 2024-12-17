import { create } from "zustand";

export const conversationStore = create((set) => ({
    participantId: null,
    setParticipantId: (participantId) => set({ participantId }),

    messages: [],
    setMessages: (messages) => set({ messages }),

    conversations: [],
    setConversations: (conversations) => set({ conversations })
}))