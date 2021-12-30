import { useState } from "react";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

import Logo from "../components/Logo";
import MainMenu from "../components/MainMenu";
import SuggestionCard from "../components/SuggestionCard";
import styled from "styled-components";
import useSuggestions from "../lib/hooks/queries/useSuggestions";

import EmptyState from "../components/EmptyState";
import TagMenu from "../components/TagMenu";
import RoadmapMenu from "../components/RoadmapMenu";
import { useMobileMenu } from "../lib/hooks/context/mobileMenuState";
import { useEffect } from "react";
import { useSortFilter } from "../lib/hooks/context/sortFilter";
import { media } from "../lib/config";

const HomeStyles = styled.div`
  header {
    position: relative;

    ${media.tablet} {
      display: flex;
      column-gap: 1rem;

      padding: 3.5rem 2.5rem 1.5rem 2.5rem;

      & > * {
        border-radius: 0.625rem;
        flex: 1;
      }
    }
  }

  main {
    padding: 1rem 1.5rem;

    ${media.tablet} {
      padding: 1rem 2.5rem 2.5rem 2.5rem;
    }
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
  // media query that looks to differentiate desktop vs table/mobile in order to show/hide hamburger in navbar
  const isMobile = useMediaQuery({
    query: "(max-width: 550px)",
  });

  const { menuIsOpen, closeMobileMenu } = useMobileMenu(); // context state and helper function for opening and closing mobile menu
  const { selected, sortSuggestions, tag } = useSortFilter(); // context state and helper functions for tracking which sort and filter option is selected and sorting the suggestions
  const [products, setProducts] = useState(); // state to keep track of current suggestions to be shown to user. NOTE: i used "products" initially even though it is suggestions. will need to replace

  const { data, error, loading } = useSuggestions(); // call api to get the data

  useEffect(() => {
    if (tag === "all") {
      // if the tag is equal to "all" we don't need to do any filtering before running the sorting and setting the sorted suggestions to the product state
      setProducts(sortSuggestions(data?.allSuggestions, selected));
    } else {
      // otherwise, filter the suggestions first then do the sorting
      let suggestions = data?.allSuggestions.filter(
        item => item.category === tag
      );
      setProducts(sortSuggestions(suggestions, selected));
    }

    return function cleanup() {
      // clean up function to make sure the mobile menu closes whenever the page changes or a filter/sort is selected
      closeMobileMenu();
    };
  }, [data, selected, tag]); // keeping track of the following variables to the filtering and sorting happen dynamically

  // TODO: handle loading and errors properly
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, something went wrong {error.message}</p>;

  // MAP OVER SUGGESTIONS
  const renderedProducts =
    products &&
    products.map(product => (
      <SuggestionCard
        key={product.id}
        product={product}
        id={product.id}
        clickable
      />
    ));

  // MOBILE MENU
  const mobileMenu = menuIsOpen && (
    <div className="black-out">
      <div className="mobile-menu">
        <div className="tags">
          <TagMenu />
        </div>
        <RoadmapMenu productRequests={products} />
      </div>
    </div>
  );

  const mobileHeader = (
    <header>
      <Logo />
      {mobileMenu}
      <MainMenu />
    </header>
  );

  const tabletHeader = (
    <header className="top">
      <Logo />
      <TagMenu />
      <RoadmapMenu productRequests={products} />
    </header>
  );

  return (
    <HomeStyles>
      <Head>
        <title>Product Feedback | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile ? mobileHeader : tabletHeader}

      {/* // if products exist, render them, otherwise render the empty state */}
      <main>
        {!isMobile && <MainMenu numOfSuggestions={products?.length} />}
        {products ? renderedProducts : <EmptyState />}
      </main>
    </HomeStyles>
  );
}
