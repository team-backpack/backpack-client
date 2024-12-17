import { BeatLoader } from "react-spinners";
import ConversationBadge from "../../components/conversation/badge";
import { useConversation } from "../../hooks/useConversation";
import "./styles.css";

function Conversations() {
  const { loading, conversations } = useConversation();

  return (
    <div className="conversations">
      <header>
        <h2>Conversas</h2>
      </header>
      {loading ? (
        <div className="spinner">
          <BeatLoader loading={loading} />
        </div>
      ) : (
        <main>
          {conversations.map((conversation, i) => (
            <ConversationBadge key={i} conversation={conversation} />
          ))}
        </main>
      )}
    </div>
  );
}

export default Conversations;
