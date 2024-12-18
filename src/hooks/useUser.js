import { useState } from "react";
import toast from "react-hot-toast";

const useUser = () => {
  const [loading, setLoading] = useState(false);

  const getUser = async (userId) => {
    if (!userId) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/users/${userId}/`, {
        method: "GET",
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }

      return res;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getUser };
};

export { useUser };
