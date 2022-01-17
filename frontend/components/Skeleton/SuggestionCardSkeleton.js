import styled from "styled-components";

import { media } from "../../lib/config";

const SuggestionCardSkeletonStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;
  overflow: hidden;

  display: grid;
  position: relative;
  grid:
    "main main" 3fr
    "upvotes comments" 1fr
    / 1fr 1fr;
  grid-row-gap: 1rem;

  padding: 1.5rem;
  margin-top: 1rem;
  width: 100%;

  ${media.tablet} {
    grid: ${({ roadmap }) =>
      roadmap
        ? "'main main' 1fr 'upvotes comments' 1fr / 1fr 1fr"
        : "'upvotes main comments' 1fr / 1fr 8fr 1fr"};

    padding: ${({ roadmap }) => (roadmap ? "1.25rem" : "1.75rem 2rem")};
  }

  /* &:hover h4 {
    color: ${({ clickable }) => (clickable ? "var(--blue)" : "var(--text)")};
  }

  .top-border {
    background: ${({ statusView, colors }) => `${colors[statusView]}`};

    position: absolute;
    top: 0;

    width: 100%;
    height: 0.375rem;
  } */

  .main {
    grid-area: main;

    & div:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .upvotes {
    grid-area: upvotes;
  }

  .comments {
    grid-area: comments;
    align-self: center;
    justify-self: end;
  }

  /* .status-container {
    display: flex;
    align-items: center;

    margin-bottom: 1rem;

    & p {
      margin-left: 0.5rem;
    }
  } */
`;

export default function SuggestionCardSkeleton({ roadmap }) {
  return (
    <SuggestionCardSkeletonStyles roadmap={roadmap}>
      <div className="main">
        <div className="skeleton skeleton-header" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-tag" />
      </div>

      <div className="upvotes">
        <div className="skeleton skeleton-upvote" />
      </div>

      <div className="comments">
        <div className="skeleton skeleton-comment" />
      </div>
    </SuggestionCardSkeletonStyles>
  );
}
