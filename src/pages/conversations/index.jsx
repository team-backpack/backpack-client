import "./styles.css";

function Conversations() {
  const profile = {
    displayName: "Nome legal",
    pictureURL: "https://avatarfiles.alphacoders.com/375/375571.png",
  };

  return (
    <div className="conversations">
      <header>
        <h2>Conversas</h2>
      </header>
      <main>
        <div className="conversation">
          <div className="user">
            <img src={profile.pictureURL} alt="Picture" />
            <div className="textual">
              <span className="displayName">{profile.displayName}</span>
              <span className="lastMessage">
                Você: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus aliquam accusantium voluptate quidem dolor magnam
                deleniti odit quis dicta? Minus accusantium incidunt fugiat
                error quos illo aliquid hic. Tenetur, illum.
              </span>
            </div>
          </div>
          <span className="time">14h</span>
        </div>
      </main>
    </div>
  );
}

export default Conversations;
