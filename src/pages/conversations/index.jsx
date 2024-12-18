import { BeatLoader } from "react-spinners";
import ConversationBadge from "../../components/conversation/badge";
import { useConversation } from "../../hooks/useConversation";
import "./styles.css";
import { useEffect } from "react";

function Conversations() {
  const { loading, conversations, getConversations } = useConversation();

  useEffect(() => {
    getConversations();
  }, []);

  return (
    <div className="conversations">
      <header>
        <h2>Mensagens</h2>
      </header>
      {loading ? (
        <div className="spinner">
          <BeatLoader loading={loading} />
        </div>
      ) : (
        <main>
          {conversations.length !== 0 ? (
            conversations.map((conversation, i) => (
              <ConversationBadge key={i} conversation={conversation} />
            ))
          ) : (
            <p className="empty">Nada aqui ainda.</p>
          )}
        </main>
      )}
    </div>
  );
}

export default Conversations;
