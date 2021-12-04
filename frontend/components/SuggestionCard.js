import styled from "styled-components";
import UpVoteBtn from "./Buttons/UpVoteBtn";

import Tag from "./Tag";
import CommentsBtn from "./Buttons/CommentsBtn";

const SuggestionCardStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;

  padding: 1.5rem;
  margin-top: 1rem;
  width: 100%;

  h4 {
    margin-bottom: 1rem;
  }

  .body-1 {
    margin-bottom: 1rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 1rem;
  }
`;

export default function SuggestionCard({ product }) {
  return (
    <SuggestionCardStyles>
      <h4>{product.title}</h4>
      <p className="body-1">{product.description}</p>
      <Tag category={product.category} />
      <div className="footer">
        <UpVoteBtn votes={product.upvotes} />
        <CommentsBtn
          numOfComments={product.comments ? product.comments.length : 0} // check if comments exist, if not, hard code 0
        />
      </div>
    </SuggestionCardStyles>
  );
}
