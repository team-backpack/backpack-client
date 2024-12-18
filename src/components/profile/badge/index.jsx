import "./styles.css";
import DefaultProfilePicture from "../../../assets/default-user.png";

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
          {!isAuthUser && (
            <div className="follow">
              <button>Seguir</button>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

export default ProfileBadge;
