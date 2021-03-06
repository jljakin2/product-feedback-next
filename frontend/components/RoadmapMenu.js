// third-party
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import Dot from "./Dot";

// helpers
import capitalize from "../lib/capitalize";
import { media, roadmapColors } from "../lib/config";

// ===== STYLING =====
const RoadmapMenuStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;

  padding: 1.5rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 1.5rem;
  }

  .content-row {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .body-1 {
    color: var(--greyBlue);

    margin-left: 1rem;
  }

  .body-3 {
    font-size: 1rem;

    margin-left: auto;
  }

  a {
    color: var(--blue);
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: var(--lightBlue);
    }
  }

  .skeleton-text:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
// ===== END OF STYLING =====

export default function RoadmapMenu({ productRequests, loading }) {
  function getNumOfStatus(products, status) {
    // take all products and find the total number of suggestions that match the given status
    return products?.filter(product => product.status === status).length;
  }

  // MAP ROWS FOR STATUS OF EACH STATUS TYPE
  const renderedStatusContent = Object.keys(roadmapColors).map((key, index) => {
    return (
      <div key={index} className="content-row">
        <Dot statusView={key} />
        <p className="body-1">{capitalize(key)}</p>
        <p className="body-3">{getNumOfStatus(productRequests, key)}</p>
      </div>
    );
  });

  const skeletonLoadingContent = Object.keys(roadmapColors).map(
    (key, index) => {
      return <div key={index} className="skeleton skeleton-text" />;
    }
  );

  return (
    <RoadmapMenuStyles>
      <div className="header">
        <h3>Roadmap</h3>
        <Link href="/roadmap" className="view">
          View
        </Link>
      </div>

      <div>{loading ? skeletonLoadingContent : renderedStatusContent}</div>
    </RoadmapMenuStyles>
  );
}

RoadmapMenu.propTypes = {
  productRequests: PropTypes.array,
};
