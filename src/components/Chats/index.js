import { useRef, useState } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";

function ChatInput({ input, setInput }) {
  return (
    <form action="" className="chatscreen-input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="type a message..."
        className="chatscreen-input-field"
      />
      <button
        type="submit"
        onClick={handleSend}
        className="chatscreen-input-button"
      >
        SEND
      </button>
    </form>
  );
}

ChatInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};

export default function Chat() {
  const messagesRef = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const scrollToBottom = () => null;

  // React.useEffect

  return (
    <div className="chatscreen">
      <p className="chatscreen-timestamp">
        YOU MATCHED WITH PICASSO ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen-message">
            <Avatar
              className="chatscreen-avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatscreen-text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen-message">
            <p className="chatscreen-text-user">{message.message}</p>
          </div>
        )
      )}
      <div className="chatscreen-space" ref={messageRef}></div>
      <ChatInput input={input} setInput={setInput} />
    </div>
  );
}
