import styled from "styled-components";

import CommentItem from "./CommentItem";

const CommentsContainerStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;

  margin: 1.5rem 0 -1.5rem 0;
  padding: 1.5rem;
`;

export default function CommentsContainer({ comments }) {
  const renderedComments = comments.map(comment => {
    return <CommentItem key={comment.id} comment={comment} />;
  });

  return (
    <CommentsContainerStyles>
      <h2>
        {comments.length} {comments.length === 1 ? " Comment" : "Comments"}
      </h2>
      {renderedComments}
    </CommentsContainerStyles>
  );
}
