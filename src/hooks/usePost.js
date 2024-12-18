import { useState } from "react";
import toast from "react-hot-toast";
import { postStore } from "../store/postStore";

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const { posts, setPosts } = postStore();

  const like = async (postId) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts/${postId}/likes/`, {
        method: "POST",
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const dislike = async (postId) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts/${postId}/dislikes/`, {
        method: "POST",
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const comment = async (postId, post) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts/${postId}/comments/`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(post)
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const repost = async (postId, post) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts/${postId}/reposts/`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(post)
      });

      const res = await response.json();
      if (res.error) {
        throw new Error(res.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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

  return { loading, posts, publishPost, getPosts, like, dislike, comment, repost };
};

export { usePost };
