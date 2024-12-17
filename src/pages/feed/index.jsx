import Explore from "../../components/feed/explore";
import NavigationBar from "../../components/feed/navbar";
import Post from "../../components/feed/post";
import "./styles.css";

function Feed() {
  const post = {
    profile: {
      displayName: "Nome legal",
      username: "username",
      pictureURL:
        "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
    },
    mediaURLs: [
      "https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://i.pinimg.com/236x/43/13/98/4313984074937e0d3551c4a6b5d4c874.jpg",
      "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
      "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
    ],
    text: "Eu amo minhas flores",
    postedAt: "14h",
    comments: 5,
    reposts: 5,
    likes: 5,
  };

  return (
    <div className="container large">
      <NavigationBar />

      <div className="divider"></div>

      <div className="posts">
        <Post post={post} />
      </div>

      <div className="divider"></div>

      <Explore />
    </div>
  );
}

export default Feed;
