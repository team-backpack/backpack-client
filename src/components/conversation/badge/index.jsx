import { useAuth } from "../../../context/AuthContext";
import "./styles.css";
import DefaultProfilePicture from "../../../assets/default-user.png";
import { Link } from "react-router-dom";
import { formatTime } from "../../../util/time";
import { useConversation } from "../../../hooks/useConversation";

function ConversationBadge({ conversation }) {
  const { user } = useAuth();

  const { lastMessage, participant } = conversation;

  const { setSelectedConversation } = useConversation();

  return (
    <Link
      to={`/messages/${
        participant.user ? participant.user.userId : participant.userId
      }`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div
        className={`conversation-badge ${
          lastMessage.receiverId === user.userId && !lastMessage.seen
            ? "new"
            : ""
        }`}
      >
        <div className="user">
          <img
            src={
              participant.pictureURL
                ? participant.pictureURL
                : DefaultProfilePicture
            }
            alt="Picture"
          />
          <div className={"textual"}>
            <span className="displayName">
              {participant.displayName
                ? participant.displayName
                : participant.username
                ? `@${participant.username}`
                : `@${participant.user.username}`}
            </span>
            <span className="lastMessage">
              {lastMessage.senderId === user.userId ? "Você:" : ""}{" "}
              {lastMessage.text}
            </span>
          </div>
        </div>
        <span className="time">{formatTime(lastMessage.createdAt)}</span>
      </div>
    </Link>
  );
}

export default ConversationBadge;
