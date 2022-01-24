// third-party
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import PropTypes from "prop-types";

// components
import AddReplyForm from "./AddReplyForm";
import Reply from "./Reply";
import CommentHeaderStyles from "../styles/CommentHeaderStyles";

// ===== STYLING =====
export const CommentItemStyles = styled.div`
  width: 100%;
  padding-top: 1.5rem;

  &:not(:last-child) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--grey);
  }

  .body-2 {
    color: var(--greyBlue);
  }
`;
// ===== END OF STYLING =====

export default function CommentItem({ comment }) {
  const [replyToComment, setReplyToComment] = useState(false); // toggles whether or not the reply form is open

  // MAP REPLIES
  const renderedReplies =
    comment.replies &&
    comment.replies.map(reply => {
      return <Reply key={reply.id} reply={reply} commentId={comment.id} />;
    });

  // callback function to allow the form to close when it is submitted
  function closeReplyToComment() {
    setReplyToComment(false);
  }

  return (
    <CommentItemStyles>
      <CommentHeaderStyles>
        <Image
          className="image"
          src={comment.user.image}
          alt={`${comment.user.name}'s profile pic`}
          width={40}
          height={40}
        />
        <div className="contact">
          <p className="body-3">{comment.user.name}</p>
          <p className="body-3 username">{`@${comment.user.username}`}</p>
        </div>
        <button onClick={() => setReplyToComment(!replyToComment)}>
          Reply
        </button>
      </CommentHeaderStyles>

      <p className="body-2">{comment.content}</p>

      {/* only show reply form when the user clicks on the "reply" button */}
      {replyToComment && (
        <AddReplyForm
          closeReplyToComment={closeReplyToComment}
          commentId={comment.id}
          replyingToId={comment.user.id}
        />
      )}

      {renderedReplies}
    </CommentItemStyles>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object,
};
