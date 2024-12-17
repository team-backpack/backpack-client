import "./styles.css";

function ProfileBadge() {
  return (
    <div className="profile">
      <div className="picture">
        <img
          src="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Picture"
        />
      </div>
      <div className="info">
        <header className="names">
          <span className="displayName">Nome legal</span>
          <span className="username">@nomelegal</span>
          <div className="follow">
            <button>Seguir</button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default ProfileBadge;
