import { useEffect, useState } from "react";
import { conversationStore } from "../store/conversationStore";
import toast from "react-hot-toast";

const useConversation = () => {
  const [loading, setLoading] = useState(false);

  const { conversations, setConversations } = conversationStore();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/messages/", {
          method: "GET",
        });

        const res = await response.json();
        if (res.error) {
          throw new Error(res.error);
        }

        setConversations(res);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export { useConversation };
