import Head from "next/head";

import Logo from "../components/Logo";
import MainMenu from "../components/MainMenu";
import SuggestionCard from "../components/SuggestionCard";
import styled from "styled-components";
import useSuggestions from "../lib/hooks/useSuggestions";

import EmptyState from "../components/EmptyState";
import TagMenu from "../components/TagMenu";
import RoadmapMenu from "../components/RoadmapMenu";
import { useMobileMenu } from "../lib/mobileMenuState";
import { useEffect } from "react";

const HomeStyles = styled.div`
  header {
    position: relative;
  }

  main {
    padding: 1rem 1.5rem;
  }

  .black-out {
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 4.6rem;
    right: 0;

    width: 100%;
    height: 100vh;

    z-index: 100;
  }

  .mobile-menu {
    background: var(--grey);

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
  const { menuIsOpen, closeMobileMenu } = useMobileMenu();

  useEffect(() => {
    return function cleanup() {
      closeMobileMenu();
    };
  }, []);

  const { data, error, loading } = useSuggestions();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, something went wrong {error.message}</p>;

  const products = data?.allSuggestions;
  const renderedProducts =
    products &&
    products.map(product => (
      <SuggestionCard product={product} key={product.id} id={product.id} />
    ));
  const mobileMenu = menuIsOpen && (
    <div className="black-out">
      <div className="mobile-menu">
        <div className="tags">
          <TagMenu productRequests={products} />
        </div>
        <RoadmapMenu productRequests={products} />
      </div>
    </div>
  );

  return (
    <HomeStyles>
      <Head>
        <title>Product Feedback | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Logo />
        {mobileMenu}
        <MainMenu />
      </header>
      {/* // if products exist, render them, otherwise render the empty state */}
      <main>{products ? renderedProducts : <EmptyState />}</main>
    </HomeStyles>
  );
}
