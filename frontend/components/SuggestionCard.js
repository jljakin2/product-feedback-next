// third-party
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

// components
import UpVoteBtn from "./Buttons/UpVoteBtn";
import Tag from "./Tag";
import CommentsBtn from "./Buttons/CommentsBtn";
import Dot from "./Dot";

// helpers
import capitalize from "../lib/capitalize";
import roadmapColors from "../lib/roadmapColors";
import { media } from "../lib/config";

// ===== STYLING =====
const SuggestionCardStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
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
        ? "'main main' 3fr 'upvotes comments' 1fr / 1fr 1fr"
        : "'upvotes main comments' 1fr / 1fr 8fr 1fr"};

    padding: ${({ roadmap }) => (roadmap ? "1.25rem" : "1.75rem 2rem")};
  }

  &:hover h4 {
    color: ${({ clickable }) => (clickable ? "var(--blue)" : "var(--text)")};
  }

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

  h4 + .body-1 {
    color: var(--greyBlue);
  }

  .body-1 {
    margin-bottom: 1rem;
  }

  .main {
    grid-area: main;
  }

  .upvotes {
    grid-area: upvotes;
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
// ===== END OF STYLING =====

export default function SuggestionCard({
  product,
  roadmap,
  clickable,
  statusView,
  id,
}) {
  return (
    // if the component isn't supposed to be clickable we set the Link href to # so if the user does click on it they won't go anywhere
    <Link href={clickable ? `/suggestion/${id}` : "#"} passHref>
      <SuggestionCardStyles
        roadmap={roadmap}
        statusView={statusView}
        clickable={clickable}
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
          <UpVoteBtn
            numOfVotes={product.upvotes}
            id={product.id}
            roadmap={roadmap}
          />
        </div>

        <div className="comments">
          <CommentsBtn
            numOfComments={product.comments ? product.comments.length : 0} // check if comments exist, if not, hard code 0
            id={product.id}
          />
        </div>
      </SuggestionCardStyles>
    </Link>
  );
}

SuggestionCard.defaultProps = {
  roadmap: false, // Is it being used in the roadmap page? Changes format from regular SuggestionCard
  statusView: "", // Which status is the SuggestionCard? Changes colors and other styles based on status
  clickable: false, // is the SuggestionCard being used with a link? Changes some styles to make SuggestionCard look more like a link
};

SuggestionCard.propTypes = {
  // product: PropTypes.object,
  roadmap: PropTypes.bool,
  clickable: PropTypes.bool,
  statusView: PropTypes.string,
  id: PropTypes.string,
};
