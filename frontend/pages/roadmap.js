import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import SuggestionCard from "../components/SuggestionCard";
import GoBackBtn from "../components/Buttons/GoBackBtn";
import AddFeedbackBtn from "../components/Buttons/AddFeedbackBtn";

import data from "../lib/data.json";

const RoadMapStyles = styled.div`
  header {
    background: var(--darkBlue);
    color: var(--white);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 1.5rem;
  }

  h3 {
    margin-top: 0.5rem;
  }

  & .suggestions {
    padding: 1.5rem 1.5rem;

    & h2 {
      margin-bottom: 0.5rem;
    }

    & p {
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

export default function Home() {
  const [statusView, setStatusView] = useState("inProgress");

  const colors = {
    planned: "var(--orange)",
    inProgress: "var(--purple)",
    live: "var(--lightBlue)",
  };

  // TODO: change the connection to the data file to graphql useQuery
  const products = data?.productRequests;
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
        />
      ));
  return (
    <RoadMapStyles>
      <Head>
        <title>Product Feedback | Home</title>
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
        <StatusFilterStyles statusView={statusView} colors={colors}>
          <div
            className={statusView === "planned" ? "status active" : "status"}
            onClick={() => setStatusView("planned")}>
            <p className="body-3">Planned</p>
          </div>

          <div
            className={statusView === "inProgress" ? "status active" : "status"}
            onClick={() => setStatusView("inProgress")}>
            <p className="body-3">In-Progress</p>
          </div>

          <div
            className={statusView === "live" ? "status active" : "status"}
            onClick={() => setStatusView("live")}>
            <p className="body-3">Live</p>
          </div>
        </StatusFilterStyles>

        <div className="suggestions">
          <h2>In-Progress</h2>
          <p className="body-2">Features currently being developed</p>
          {renderedProducts}
        </div>
      </main>
    </RoadMapStyles>
  );
}
