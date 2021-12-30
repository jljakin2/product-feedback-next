// third-party
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

// components
import AddReplyForm from "./AddReplyForm";
import CommentHeaderStyles from "../styles/CommentHeaderStyles";

// ===== STYLING =====
const ReplyStyles = styled.div`
  padding: 1.5rem 0 0 1.5rem;

  span {
    font-size: 0.9375rem;
    color: var(--purple);
    font-weight: 800;
  }
`;
// ===== END OF STYLING =====

export default function Reply({ reply, commentId }) {
  const [replyToReply, setReplyToReply] = useState(false); // toggle reply form

  // callback function to allow the form to close when it is submitted
  function closeReplyToReply() {
    setReplyToReply(false);
  }

  return (
    <ReplyStyles>
      <CommentHeaderStyles>
        <Image
          className="image"
          src={reply.user.image}
          alt={`${reply.user.name}'s profile pic`}
          width={40}
          height={40}
        />
        <div className="contact">
          <p className="body-3">{reply.user.name}</p>
          <p className="body-3 username">{`@${reply.user.username}`}</p>
        </div>
        <button onClick={() => setReplyToReply(!replyToReply)}>Reply</button>
      </CommentHeaderStyles>

      <p className="body-2">
        <span>{`@${reply.replyingTo.username} `}</span>
        {reply.content}
      </p>

      {replyToReply && (
        <AddReplyForm
          closeReplyToReply={closeReplyToReply}
          reply
          replyingToId={reply.user.id}
          commentId={commentId}
        />
      )}
    </ReplyStyles>
  );
}

Reply.propTypes = {
  reply: PropTypes.object,
  commentId: PropTypes.string,
};
