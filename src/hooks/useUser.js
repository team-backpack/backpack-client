import { useState } from "react";
import toast from "react-hot-toast";
import { userStore } from "../store/userStore";
import { useAuth } from "../context/AuthContext";

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [participant, setParticipant] = useState({});
  const { users, setUsers } = userStore();
  const { user } = useAuth();

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/users/", {
        method: "GET",
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }

      const data = res.filter((fetchedUser) => {
        if (fetchedUser.userId !== user.userId) return fetchedUser;
      });

      setUsers(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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

      console.log(res);

      setParticipant(res);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, participant, users, getUsers, getUser };
};

export { useUser };
