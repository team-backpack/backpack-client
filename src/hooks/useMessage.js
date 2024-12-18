import { useState } from "react";
import { conversationStore } from "../store/conversationStore";
import toast from "react-hot-toast";

const useMessage = (participantId) => {
  const [loading, setLoading] = useState(false);

  const { messages, setMessages } = conversationStore();

  const getMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/users/${participantId}/messages/`, {
        method: "GET",
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }

      setMessages(res);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (message) => {
    if (!message) return

    const request = { text: message };

    setLoading(true);
    try {
      const response = await fetch(`/api/users/${participantId}/messages/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }

      setMessages([res, ...messages]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, messages, getMessages, sendMessage };
};

export { useMessage };
