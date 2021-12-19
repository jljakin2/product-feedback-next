import Link from "next/link";
import styled from "styled-components";

import Dot from "./Dot";

import capitalize from "../lib/capitalize";
import roadmapColors from "../lib/roadmapColors";
import data from "../lib/data.json";
import useSuggestions from "../lib/hooks/useSuggestions";

const RoadmapMenuStyles = styled.div`
  background: var(--white);
  border-radius: 0.625rem;

  padding: 1.5rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
`;

export default function RoadmapMenu({ productRequests }) {
  function getNumOfStatus(products, status) {
    // take all products and find the total number of suggestions that match the given status
    return products.filter(product => product.status === status).length;
  }

  const renderedStatusContent = Object.keys(roadmapColors).map((key, index) => {
    return (
      <div key={index} className="content-row">
        <Dot statusView={key} />
        <p className="body-1">{capitalize(key)}</p>
        <p className="body-3">{getNumOfStatus(productRequests, key)}</p>
      </div>
    );
  });

  return (
    <RoadmapMenuStyles>
      <div className="header">
        <h3>Roadmap</h3>
        <Link href="/roadmap" className="view">
          View
        </Link>
      </div>

      <div>{renderedStatusContent}</div>
    </RoadmapMenuStyles>
  );
}
