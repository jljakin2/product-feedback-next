import { useState } from "react";
import styled from "styled-components";

import CommentHeader from "./CommentHeader";
import Reply from "./Reply";
import AddReplyForm from "./AddReplyForm";

const CommentItemStyles = styled.div`
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

export default function CommentItem({ comment }) {
  //!Figure out best way to implement "add reply" to comments and replies!!!!!!!!!!!!!!!!!!
  const [isReplyingComment, setIsReplyingComment] = useState(false);
  const [isReplyingReply, setIsReplyingReply] = useState(false);

  const renderedReplies =
    comment.replies &&
    comment.replies.map(reply => {
      return (
        <Reply
          key={reply.id}
          reply={reply}
          isReplyingReply={isReplyingReply}
          setIsReplyingReply={setIsReplyingReply}
        />
      );
    });

  return (
    <CommentItemStyles>
      <CommentHeader
        comment={comment}
        isReplyingComment={isReplyingComment}
        setIsReplyingComment={setIsReplyingComment}
      />
      <p className="body-2">{comment.content}</p>
      {isReplyingComment && <AddReplyForm />}
      {renderedReplies}
    </CommentItemStyles>
  );
}
