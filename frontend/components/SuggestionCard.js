import styled from "styled-components";
import UpVoteBtn from "./Buttons/UpVoteBtn";

import Tag from "./Tag";
import CommentsBtn from "./Buttons/CommentsBtn";

const SuggestionCardStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;

  display: grid;
  grid:
    "main main" 3fr
    "upvotes comments" 1fr
    / 1fr 1fr;
  grid-row-gap: 1rem;

  padding: 1.5rem;
  margin-top: 1rem;
  width: 100%;

  h4 {
    margin-bottom: 1rem;
  }

  .body-1 {
    margin-bottom: 1rem;
  }

  .main {
    grid-area: main;
  }

  .upvotes {
    grid-area: upvotes;
    align-self: center;
  }

  .comments {
    grid-area: comments;
    align-self: center;
    justify-self: end;
  }

  /* .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 1rem;
  } */
`;

export default function SuggestionCard({ product }) {
  return (
    <SuggestionCardStyles>
      <div className="main">
        <h4>{product.title}</h4>
        <p className="body-1">{product.description}</p>
        <Tag category={product.category} />
      </div>
      <div className="upvotes">
        <UpVoteBtn votes={product.upvotes} />
      </div>
      <div className="comments">
        <CommentsBtn
          numOfComments={product.comments ? product.comments.length : 0} // check if comments exist, if not, hard code 0
        />
      </div>
    </SuggestionCardStyles>
  );
}
