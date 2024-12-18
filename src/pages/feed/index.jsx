import Post from "../../components/post";
import "./styles.css";
import { usePost } from "../../hooks/usePost";
import { useEffect } from "react";
import { BeatLoader } from "react-spinners";

function Feed() {
  const { loading, posts, getPosts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="posts">
      {loading ? (
        <div className="spinner">
          <BeatLoader loading={loading} />
        </div>
      ) : (
        posts.map((post, i) => <Post key={i} post={post} />)
      )}
    </div>
  );
}

export default Feed;
