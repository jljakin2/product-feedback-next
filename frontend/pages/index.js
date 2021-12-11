import Head from "next/head";
import Logo from "../components/Logo";
import MainMenu from "../components/MainMenu";
import SuggestionCard from "../components/SuggestionCard";
import styled from "styled-components";

import data from "../lib/data.json";
import EmptyState from "../components/EmptyState";
import FilterTags from "../components/FilterTags";
import RoadmapMenu from "../components/RoadmapMenu";

const HomeStyles = styled.div`
  header {
    position: relative;
  }

  main {
    padding: 1rem 1.5rem;
  }

  .mobile-menu {
    background: var(--grey);

    position: absolute;
    top: 4.6rem;
    right: 0;

    width: 65vw;
    height: 100vh;
    padding: 1.5rem;

    z-index: 1000;

    & .tags {
      margin-bottom: 1.5rem;
    }
  }
`;

export default function Home() {
  const products = data?.productRequests;
  const renderedProducts =
    // if products exist, render them, otherwise render the empty state
    products &&
    products.map((product, index) => (
      <SuggestionCard product={product} key={index} />
    ));

  return (
    <HomeStyles>
      <Head>
        <title>Product Feedback | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Logo />
        {/* <div className="mobile-menu">
          <div className="tags">
            <FilterTags />
          </div>
          <RoadmapMenu />
        </div> */}
        <MainMenu />
      </header>

      <main>{products ? renderedProducts : <EmptyState />}</main>
    </HomeStyles>
  );
}
