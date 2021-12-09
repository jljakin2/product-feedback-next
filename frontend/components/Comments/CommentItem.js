import styled from "styled-components";

import CommentHeader from "./CommentHeader";
import Reply from "./Reply";

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
  // TODO: change the Image component to be more dynamic by using cloudinary links when backend is set up

  const renderedReplies =
    comment.replies &&
    comment.replies.map(reply => {
      return <Reply key={reply.id} reply={reply} />;
    });

  return (
    <CommentItemStyles>
      <CommentHeader comment={comment} />
      <p className="body-2">{comment.content}</p>
      {renderedReplies}
    </CommentItemStyles>
  );
}
