import styled from "styled-components";

import { CommentsContainerStyles } from "../Comments/CommentsContainer";

const CommentSkeletonStyles = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  .contact {
    width: 100%;
    margin-left: 1rem;
  }

  .skeleton-header {
    margin-bottom: 1rem;
  }
`;

export default function CommentSkeleton() {
  const renderedSkeletonComments = [1, 2, 3].map((item, index) => {
    return (
      <CommentSkeletonStyles key={index}>
        <div className="skeleton skeleton-avatar" />
        <div className="contact">
          <div className="skeleton skeleton-header" />
          <div className="skeleton skeleton-text" />
        </div>
      </CommentSkeletonStyles>
    );
  });

  return (
    <CommentsContainerStyles>
      <div className="skeleton skeleton-header" />

      {renderedSkeletonComments}
    </CommentsContainerStyles>
  );
}
