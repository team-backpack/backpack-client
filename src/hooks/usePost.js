import { useState } from "react";
import toast from "react-hot-toast";
import { postStore } from "../store/postStore";

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const { posts, setPosts } = postStore();

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/posts/", {
        method: "GET",
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }

      setPosts(res);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const publishPost = async (post) => {
    setLoading(true);
    try {
      const response = await fetch("/api/posts/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(post),
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }

      setPosts([res, ...posts]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, posts, publishPost, getPosts };
};

export { usePost };
