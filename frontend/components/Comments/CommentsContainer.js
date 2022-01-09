// third-party
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import CommentItem from "./CommentItem";

// helpers
import { media } from "../../lib/config";

// ===== STYLING =====
const CommentsContainerStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;

  margin: 1.5rem 0 -1.5rem 0;
  padding: 1.5rem;

  ${media.laptop} {
    padding: 2rem;
  }
`;
// ===== END OF STYLING =====

export default function CommentsContainer({ comments }) {
  // MAP COMMENTS
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

CommentsContainer.propTypes = {
  comments: PropTypes.array,
};
