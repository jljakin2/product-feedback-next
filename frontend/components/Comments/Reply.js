import styled from "styled-components";

import CommentHeader from "./CommentHeader";
import AddReplyForm from "./AddReplyForm";

const ReplyStyles = styled.div`
  padding: 1.5rem 0 0 1.5rem;

  span {
    font-size: 0.9375rem;
    color: var(--purple);
    font-weight: 800;
  }
`;

export default function Reply({ reply, isReplyingReply, setIsReplyingReply }) {
  return (
    <ReplyStyles>
      <CommentHeader
        comment={reply}
        isReplyingReply={isReplyingReply}
        setIsReplyingReply={setIsReplyingReply}
        isReply
      />
      <p className="body-2">
        <span>{`@${reply.replyingTo.username} `}</span>
        {reply.content}
      </p>
      {isReplyingReply && <AddReplyForm />}
    </ReplyStyles>
  );
}
