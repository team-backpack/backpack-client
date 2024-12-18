import { BeatLoader } from "react-spinners";
import "./styles.css";
import DefaultProfilePicture from "../../assets/default-user.png";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import MessageInput from "../../components/conversation/input";
import Message from "../../components/conversation/message";
import { useMessage } from "../../hooks/useMessage";
import { diffInHours } from "../../util/time";
import { useUser } from "../../hooks/useUser";
import { useEffect, useMemo } from "react";

function Conversation() {
  const params = useParams();
  const { loading, messages, getMessages } = useMessage(params.participantId);
  const { participant, getUser } = useUser();

  useEffect(() => {
    getMessages();
    getUser(params.participantId);
    console.log(participant);
  }, []);

  const sortedMessages = useMemo(() => {
    return messages.slice().reverse();
  }, [messages]);

  const processedMessages = useMemo(() => {
    const sortedMessages = messages.slice().reverse();

    return sortedMessages.map((message, i) => {
      const isFirst = sortedMessages[i + 1]
        ? sortedMessages[i + 1].senderId !== message.senderId
        : false;

      const isLast =
        !sortedMessages[i - 1] ||
        sortedMessages[i - 1].senderId !== message.senderId ||
        diffInHours(message.createdAt, sortedMessages[i - 1]?.createdAt) >= 1;

      return { ...message, isFirst, isLast };
    });
  }, [sortedMessages]);

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
              participant
                ? participant.profile
                  ? participant.profile.pictureURL
                    ? participant.profile.pictureURL
                    : DefaultProfilePicture
                  : DefaultProfilePicture
                : DefaultProfilePicture
            }
            alt="Picture"
          />
          <h2>
            {participant
              ? participant.profile
                ? participant.profile.displayName
                : participant.username
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
            {processedMessages.map((message, i) => (
              <Message
                key={i}
                message={message}
                isFirst={message.isFirst}
                isLast={message.isLast}
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
