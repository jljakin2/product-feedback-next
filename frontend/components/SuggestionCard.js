import styled from "styled-components";
import PropTypes from "prop-types";

import UpVoteBtn from "./Buttons/UpVoteBtn";
import Tag from "./Tag";
import CommentsBtn from "./Buttons/CommentsBtn";
import Dot from "./Dot";

import capitalize from "../lib/capitalize";
import roadmapColors from "../lib/roadmapColors";

const SuggestionCardStyles = styled.div`
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

  .top-border {
    background: ${({ statusView, colors }) => `${colors[statusView]}`};

    position: absolute;
    top: 0;

    width: 100%;
    height: 0.375rem;
  }

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

  .status-container {
    display: flex;
    align-items: center;

    margin-bottom: 1rem;

    & p {
      margin-left: 0.5rem;
    }
  }
`;

export default function SuggestionCard({ product, roadmap, statusView }) {
  return (
    <SuggestionCardStyles
      roadmap={roadmap}
      statusView={statusView}
      colors={roadmapColors}>
      {roadmap && <div className="top-border" />}

      <div className="main">
        {roadmap && (
          <div className="status-container">
            <Dot statusView={statusView} />
            <p className="body-2">{capitalize(product.status)}</p>
          </div>
        )}

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

SuggestionCard.defaultProps = {
  roadmap: false,
  statusView: "",
};

SuggestionCard.propTypes = {
  product: PropTypes.object,
  roadmap: PropTypes.bool,
  statusView: PropTypes.string,
};
