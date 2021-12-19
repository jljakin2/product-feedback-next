import styled from "styled-components";

import CommentHeader from "./CommentHeader";

const ReplyStyles = styled.div`
  padding: 1.5rem 0 0 1.5rem;

  span {
    font-size: 0.9375rem;
    color: var(--purple);
    font-weight: 800;
  }
`;

export default function Reply({ reply }) {
  return (
    <ReplyStyles>
      <CommentHeader comment={reply} />
      <p className="body-2">
        <span>{`@${reply.replyingTo.username} `}</span>
        {reply.content}
      </p>
    </ReplyStyles>
  );
}
