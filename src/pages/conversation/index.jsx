import { BeatLoader } from "react-spinners";
import { useConversation } from "../../hooks/useConversation";
import "./styles.css";
import DefaultProfilePicture from "../../assets/default-user.png";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import MessageInput from "../../components/conversation/input";
import Message from "../../components/conversation/message";

function Conversation() {
  const { loading } = useConversation();

  const participant = {
    pictureURL: "",
    displayName: "Nome legal",
  };

  const message = {
    senderId: "5f7ae737-1d7f-47db-bdaf-00b3cfcb2083",
    receiverId: "",
    text: "Olá, como vai?",
    sendedAt: "14h"
  }

  return (
    <div className="conversation">
      <header>
        <Link to={"/messages"}>
          <div className="back-arrow">
            <IoArrowBack />
          </div>
        </Link>
        <div className="profile">
          <img
            src={
              participant.pictureURL
                ? participant.pictureURL
                : DefaultProfilePicture
            }
            alt="Picture"
          />
          <h2>{participant.displayName}</h2>
        </div>
      </header>
      {loading ? (
        <div className="spinner">
          <BeatLoader loading={loading} />
        </div>
      ) : (
        <main>
          <div className="messages">
            <Message message={message} isFirst={true} />
            <Message message={message} />
            <Message message={message} />
            <Message message={message} isLast={true} />
          </div>
          <MessageInput />
        </main>
      )}
    </div>
  );
}

export default Conversation;
