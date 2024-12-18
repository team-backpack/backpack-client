import { useState } from "react";
import "./styles.css";
import { IoSend } from "react-icons/io5";
import { useMessage } from "../../../hooks/useMessage";
import { useParams } from "react-router-dom";

function MessageInput() {
  const [message, setMessage] = useState("");

  const params = useParams();
  const { sendMessage } = useMessage(params.participantId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendMessage(message);

    setMessage("");
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Estou pensando em..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">
        <IoSend />
      </button>
    </form>
  );
}

export default MessageInput;
