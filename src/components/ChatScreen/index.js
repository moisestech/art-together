import PropTypes from "prop-types";
import Chat from "../Chat";

export default function ChatScreen() {
  return (
    <div className="chats">
      <Chat
        name="Sylvia"
        message="Yo whats up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  );
}

ChatScreen.propTypes = {};
