import { BeatLoader } from "react-spinners";
import "./styles.css";
import DefaultProfilePicture from "../../assets/default-user.png";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import MessageInput from "../../components/conversation/input";
import Message from "../../components/conversation/message";
import { useMessage } from "../../hooks/useMessage";
import { diffInHours } from "../../util/time";
import { useConversation } from "../../hooks/useConversation";

function Conversation() {
  const params = useParams();

  const { loading, messages } = useMessage(params.participantId);

  const { selectedConversation } = useConversation();
  console.log(selectedConversation);

  const participant = selectedConversation.participant;

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
          <h2>
            {participant.displayName
              ? participant.displayName
              : participant.user
              ? participant.user.username
              : participant.username}
          </h2>
        </div>
      </header>
      {loading ? (
        <div className="spinner">
          <BeatLoader loading={loading} />
        </div>
      ) : (
        <main>
          <div className="messages">
            {messages
              .slice()
              .reverse()
              .map((message, i) => (
                <Message
                  key={i}
                  message={message}
                  isFirst={
                    messages[messages.length - i]
                      ? messages[messages.length - i].senderId !==
                        message.senderId
                      : true
                  }
                  isLast={
                    messages[messages.length - i - 2]
                      ? messages[messages.length - i - 2].senderId !==
                          message.senderId ||
                        diffInHours(
                          message.createdAt,
                          messages[messages.length - i - 2].createdAt
                        ) >= 1
                      : true
                  }
                />
              ))}
          </div>
          <MessageInput />
        </main>
      )}
    </div>
  );
}

export default Conversation;
