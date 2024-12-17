import { useState } from "react";
import "./styles.css";
import { IoSend } from "react-icons/io5";

function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  } 

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
