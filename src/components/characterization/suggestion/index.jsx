import "./styles.css";

function Suggestion({ profile }) {

  return (
    <div className="suggestion">
      <main>
        <div
          className="picture"
          style={{ backgroundImage: `url(${profile.pictureURL}})` }}
        >
          <div className="names">
            <span className="displayName">{profile.displayName}</span>
            <span className="username">@{profile.username}</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Suggestion;
