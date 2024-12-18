import "./styles.css";
import DefaultProfilePicture from "../../../assets/default-user.png";
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProfileBadge({ user, isAuthUser }) {
  return (
    <div className="profile">
      <div className="picture">
        <img
          src={user.profile.pictureURL || DefaultProfilePicture}
          alt="Picture"
        />
      </div>
      <div className="info">
        <header className="names">
          <span className="displayName">{user.profile.displayName}</span>
          <span className="username">@{user.username}</span>
        </header>
        {!isAuthUser && (
          <Link to={`/messages/${user.userId}`} className="message">
            <div>
              <FaRegPaperPlane className="icon" />
            </div>
          </Link>
        )}
        {!isAuthUser && (
            <div className="follow">
              <button>Seguir</button>
            </div>
          )}
      </div>
    </div>
  );
}

export default ProfileBadge;
