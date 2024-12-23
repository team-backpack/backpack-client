import "./styles.css";
import { useAuth } from "../../../context/AuthContext";
import { formatTime } from "../../../util/time";

function Message({ message, isFirst, isLast }) {
  const { user } = useAuth();

  return (
    <div
      className={`message ${
        message.senderId === user.userId ? "right" : "left"
      }`}
    >
      <div
        className={`content ${isFirst && isLast ? "alone" : ""} ${
          isFirst ? "first" : ""
        } ${isLast ? "last" : ""}`}
      >
        {message.text}
      </div>
      {isLast && (
        <div className="sendedAt">
          <span>{formatTime(message.createdAt)}</span>
        </div>
      )}
    </div>
  );
}

export default Message;
