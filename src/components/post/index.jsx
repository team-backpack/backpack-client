import { BiLike, BiSolidLike, BiWorld } from "react-icons/bi";
import { FaCommentDots, FaRegCommentDots } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useRef, useState } from "react";
import DefaultProfilePicture from "../../assets/default-user.png";
import { formatTime } from "../../util/time";
import "./styles.css";
import { usePost } from "../../hooks/usePost";
import PostModal from "../navbar/post-modal";

function Post({ post }) {
  const { like, dislike } = usePost();

  const { profile, mediaURLs, text, createdAt, comments, reposts, likes } =
    post;

  const [commented, setCommented] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [liked, setLiked] = useState(false);

  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const toggleCommentModal = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const toggleComment = () => {
    setCommented(true);
    commented ? (post.comments -= 1) : (post.comments += 1);
  };

  const toggleRepost = () => {
    setReposted(!reposted);
    reposted ? (post.reposts -= 1) : (post.reposts += 1);
  };

  const handleLike = async () => {
    setLiked(!liked);

    if (liked) {
      post.likes -= 1;
      await dislike(post.postId);
    } else {
      post.likes += 1;
      await like(post.postId);
    }
  };

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollStart(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="post">
        <header>
          <div className="profile">
            <div
              className="picture"
              style={
                profile.pictureURL
                  ? { backgroundImage: `url(${profile.pictureURL})` }
                  : { backgroundImage: `url(${DefaultProfilePicture})` }
              }
            ></div>
            <div className="names">
              <span className="displayName">{profile.displayName}</span>
              <span className="username">@{profile.user.username}</span>
            </div>
          </div>
          <div className="time">
            <span>{formatTime(createdAt, true)}</span>
          </div>
        </header>
        <main>
          <div className="text">
            <pre>{text}</pre>
          </div>
          <div
            className="images"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUpOrLeave}
          >
            {mediaURLs.map((media, i) => (
              <img key={i} src={media} alt="imagem" />
            ))}
          </div>
        </main>
        <footer>
          <div className="interactions">
            <div
              className={`interaction ${commented ? "commented" : ""}`}
              onClick={toggleCommentModal}
            >
              {commented ? (
                <FaCommentDots className="icon" />
              ) : (
                <FaRegCommentDots className="icon" />
              )}
              <span>{comments}</span>
            </div>
            <div
              className={`interaction ${reposted ? "reposted" : ""}`}
              onClick={toggleRepost}
            >
              <BiWorld className="icon" />
              <span>{reposts}</span>
            </div>
            <div
              className={`interaction ${liked ? "liked" : ""}`}
              onClick={handleLike}
            >
              {liked ? (
                <BiSolidLike className="icon" />
              ) : (
                <BiLike className="icon" />
              )}
              <span>{likes}</span>
            </div>
          </div>
          <div className="options">
            <BsThreeDots className="icon" />
          </div>
        </footer>
      </div>
      <PostModal
        isOpen={isCommentOpen}
        toggleModal={toggleCommentModal}
        isComment={true}
        parentId={post.postId}
        setComment={toggleComment}
      />
    </>
  );
}

export default Post;
