import Head from "next/head";
import Logo from "../components/Logo";
import MainMenu from "../components/MainMenu";
import SuggestionCard from "../components/SuggestionCard";
import styled from "styled-components";

import data from "../lib/data.json";
import EmptyState from "../components/EmptyState";

const HomeStyles = styled.div`
  main {
    padding: 1rem 1.5rem;
  }
`;

export default function Home() {
  const products = data?.productRequests;
  const renderedProducts =
    products &&
    products.map((product, index) => (
      <SuggestionCard product={product} key={index} />
    ));
  return (
    <HomeStyles>
      <Head>
        <title>Product Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Logo />
        <MainMenu />
      </header>

      <main>{products ? renderedProducts : <EmptyState />}</main>
    </HomeStyles>
  );
}
