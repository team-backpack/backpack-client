import { BiWorld } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { useRef, useState } from "react";
import DefaultProfilePicture from "../../assets/default-user.png";
import { formatTime } from "../../util/time";
import "./styles.css";

function Post({ post }) {
  const { profile, mediaURLs, text, createdAt, comments, reposts, likes } =
    post;

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
          <div className="interaction">
            <FaRegCommentDots className="icon" />
            <span>{comments}</span>
          </div>
          <div className="interaction">
            <BiWorld className="icon" />
            <span>{reposts}</span>
          </div>
          <div className="interaction">
            <AiOutlineLike className="icon" />
            <span>{likes}</span>
          </div>
        </div>
        <div className="options">
          <BsThreeDots className="icon" />
        </div>
      </footer>
    </div>
  );
}

export default Post;
