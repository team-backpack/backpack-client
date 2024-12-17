import "./styles.css";

function CommunityBadge() {
  return (
    <div className="community">
      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
        />
      </div>
      <div className="info">
        <header className="names">
          <span className="displayName">Comunidade legal</span>
          <span className="username">@comunidade.legal</span>
          <div className="follow">
            <button>Participar</button>
          </div>
        </header>
        <main className="description">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptatum natus eos accusamus ex incidunt soluta, alias ipsum
            molestias aut fugit eum asperiores non suscipit quis officiis a iste
            deserunt?
          </span>
        </main>
      </div>
    </div>
  );
}

export default CommunityBadge;
