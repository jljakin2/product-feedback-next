import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function ReplyStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer

  const [replyToComment, setReplyToComment] = useState(false);
  const [replyToReply, setReplyToReply] = useState(false);

  function toggleReplyToComment() {
    setReplyToComment(!replyToComment);
  }
  function toggleReplyToReply() {
    setReplyToReply(!replyToReply);
  }

  function closeReplyToComment() {
    setReplyToComment(false);
  }

  function closeReplyToReply() {
    setReplyToReply(false);
  }

  return (
    <LocalStateProvider
      value={{
        replyToComment,
        replyToReply,
        toggleReplyToComment,
        toggleReplyToReply,
        closeReplyToComment,
        closeReplyToReply,
      }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useReply() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { ReplyStateProvider, useReply };
