import { useEffect, useState } from "react";
import { conversationStore } from "../store/conversationStore";
import toast from "react-hot-toast";

const useMessage = (participantId) => {
  const [loading, setLoading] = useState(false);

  const { messages, setMessages } = conversationStore();

  useEffect(() => {
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

    getMessages();
  }, []);

  return { loading, messages };
};

export { useMessage };
