import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import SuggestionCard from "../components/SuggestionCard";
import GoBackBtn from "../components/Buttons/GoBackBtn";
import AddFeedbackBtn from "../components/Buttons/AddFeedbackBtn";
import useSuggestions from "../lib/hooks/queries/useSuggestions";
import capitalize from "../lib/capitalize";
import { media } from "../lib/config";

import { roadmapColors } from "../lib/config";

const RoadMapStyles = styled.div`
  ${media.tablet} {
    padding: 3.5rem 2.5rem;
  }

  ${media.laptop} {
    padding: 3rem 10.3125rem;
  }

  ${media.desktop} {
    padding: 3rem 20rem;
  }

  header {
    background: var(--darkBlue);
    color: var(--white);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 1.5rem;

    ${media.tablet} {
      border-radius: 0.625rem;
    }
  }

  h3 {
    margin-top: 0.5rem;
  }

  & .suggestions {
    padding: 1.5rem 1.5rem;

    & h2 {
      margin-bottom: 0.5rem;
    }

    & .body-2 {
      color: var(--greyBlue);
    }
  }
`;

const StatusFilterStyles = styled.div`
  border-bottom: 1px solid var(--greyBlueLight);
  color: var(--greyBlueLight);

  display: flex;
  justify-content: space-between;

  padding: 0 1.5rem;

  .status {
    cursor: pointer;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 0;
  }

  .status.active {
    border-bottom: ${({ statusView, colors }) =>
      `4px solid ${colors[statusView]}`};
    color: var(--greyBlue);
  }
`;

const LargeStatusFilterStyles = styled.div`
  display: grid;
  grid:
    1fr
    / 1fr 1fr 1fr;
  column-gap: 1rem;

  margin-top: 2rem;

  .body-2 {
    font-size: 0.875rem;
    color: var(--greyBlue);
  }

  .card-container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
`;

export default function Home() {
  const isMobile = useMediaQuery({
    query: `(max-width: ${media.sizes.tablet})`,
  });

  const [statusView, setStatusView] = useState("inProgress");

  const descriptions = {
    inProgress: "Features currently being developed",
    planned: "Ideas prioritized for research",
    live: "Release features",
  };

  const colors = {
    planned: "var(--orange)",
    inProgress: "var(--purple)",
    live: "var(--lightBlue)",
  };

  const { data, loading, error } = useSuggestions();

  {
    loading && <p>Loading...</p>;
  }
  {
    error && <p>something went wrong...{error.message}</p>;
  }

  const products = data?.allSuggestions;
  const renderedProducts =
    // if products exist, render them, otherwise render the empty state
    products &&
    products
      .filter(product => product.status === statusView)
      .map(product => (
        <SuggestionCard
          product={product}
          key={product.id}
          statusView={statusView}
          roadmap
          clickable
          id={product.id}
        />
      ));

  const renderedPlanned =
    products &&
    products
      .filter(product => product.status === "planned")
      .map(product => (
        <SuggestionCard
          product={product}
          key={product.id}
          statusView={"planned"}
          roadmap
          clickable
          id={product.id}
        />
      ));

  const renderedInProgress =
    products &&
    products
      .filter(product => product.status === "inProgress")
      .map(product => (
        <SuggestionCard
          product={product}
          key={product.id}
          statusView={"inProgress"}
          roadmap
          clickable
          id={product.id}
        />
      ));

  const renderedLive =
    products &&
    products
      .filter(product => product.status === "live")
      .map(product => (
        <SuggestionCard
          product={product}
          key={product.id}
          statusView={"live"}
          roadmap
          clickable
          id={product.id}
        />
      ));
  return (
    <RoadMapStyles>
      <Head>
        <title>Product Feedback | Roadmap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>
          <GoBackBtn light />
          <h3>Roadmap</h3>
        </div>
        <AddFeedbackBtn />
      </header>

      <main>
        {isMobile ? (
          // roadmap for mobile screens
          <>
            <StatusFilterStyles statusView={statusView} colors={colors}>
              <div
                className={
                  statusView === "planned" ? "status active" : "status"
                }
                onClick={() => setStatusView("planned")}>
                <p className="body-3">Planned</p>
              </div>

              <div
                className={
                  statusView === "inProgress" ? "status active" : "status"
                }
                onClick={() => setStatusView("inProgress")}>
                <p className="body-3">In Progress</p>
              </div>

              <div
                className={statusView === "live" ? "status active" : "status"}
                onClick={() => setStatusView("live")}>
                <p className="body-3">Live</p>
              </div>
            </StatusFilterStyles>

            <div className="suggestions">
              <h2>{capitalize(statusView)}</h2>
              <p className="body-2">{descriptions[statusView]}</p>
              {renderedProducts}
            </div>
          </>
        ) : (
          // roadmap for screen sizes that are not mobile
          <LargeStatusFilterStyles>
            <div>
              <p className="body-3">Planned ({renderedPlanned?.length})</p>
              <p className="body-2">{descriptions["planned"]}</p>

              <div className="card-container">{renderedPlanned}</div>
            </div>

            <div>
              <p className="body-3">
                In-Progress ({renderedInProgress?.length})
                <p className="body-2">{descriptions["inProgress"]}</p>
              </p>

              <div className="card-container">{renderedInProgress}</div>
            </div>

            <div>
              <p className="body-3">Live ({renderedLive?.length})</p>
              <p className="body-2">{descriptions["live"]}</p>

              <div className="card-container">{renderedLive}</div>
            </div>
          </LargeStatusFilterStyles>
        )}
      </main>
    </RoadMapStyles>
  );
}
