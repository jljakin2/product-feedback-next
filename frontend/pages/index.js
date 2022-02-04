import { useState } from "react";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

import Logo from "../components/Logo";
import MainMenu from "../components/MainMenu";
import SuggestionCard from "../components/SuggestionCard";
import styled from "styled-components";
import useSuggestions from "../lib/hooks/queries/useSuggestions";
import SuggestionCardSkeleton from "../components/Skeleton/SuggestionCardSkeleton";

import EmptyState from "../components/EmptyState";
import TagMenu from "../components/TagMenu";
import RoadmapMenu from "../components/RoadmapMenu";
import { useMobileMenu } from "../lib/hooks/context/mobileMenuState";
import { useEffect } from "react";
import { useSortFilter } from "../lib/hooks/context/sortFilter";
import { media } from "../lib/config";

import { initializeApollo } from "../lib/apollo";
import { GET_ALL_SUGGESTIONS } from "../lib/hooks/queries/useSuggestions";

const HomeStyles = styled.div`
  ${media.laptop} {
    display: flex;
    justify-content: center;
    column-gap: 1.875rem;

    width: 100vw;
  }

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

    ${media.laptop} {
      padding: 3rem 0 1.5rem 0;
    }
  }

  main {
    padding: 1rem 1.5rem;

    ${media.tablet} {
      padding: 1rem 2.5rem 2.5rem 2.5rem;
    }

    ${media.laptop} {
      padding: 3rem 0 2.5rem 0;
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

  .top {
    ${media.laptop} {
      display: flex;
      flex-direction: column;

      height: 50vh;

      & > * {
        width: 20vw;
      }

      & > *:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }

    ${media.desktop} {
      & > * {
        width: 15vw;
      }
    }
  }

  .skeleton-header {
    margin-bottom: 1rem;
  }
`;

export default function Home() {
  // media query that looks to differentiate desktop vs table/mobile in order to show/hide hamburger in navbar
  const isMobile = useMediaQuery({
    query: `(max-width: ${media.sizes.tablet})`,
  });

  const { menuIsOpen, closeMobileMenu } = useMobileMenu(); // context state and helper function for opening and closing mobile menu
  const { selected, sortSuggestions, tag } = useSortFilter(); // context state and helper functions for tracking which sort and filter option is selected and sorting the suggestions
  const [products, setProducts] = useState([]); // state to keep track of current suggestions to be shown to user. NOTE: i used "products" initially even though it is suggestions. will need to replace

  const { data, error } = useSuggestions(); // call api to get the data

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
      setProducts([]);
    };
  }, [data, selected, tag, closeMobileMenu, sortSuggestions]); // keeping track of the following variables to the filtering and sorting happen dynamically

  if (error) return <p>Oops, something went wrong {error.message}</p>;

  // MAP OVER SUGGESTIONS
  const renderedProducts = products
    ? products.map(product => (
        <SuggestionCard
          key={product?.id}
          product={product}
          id={product?.id}
          clickable
        />
      ))
    : [];

  // CREATE 5 LOADING SKELETON CARDS
  const renderedSkeletonLoading = [1, 2, 3, 4, 5].map(num => {
    return <SuggestionCardSkeleton key={num} />;
  });

  // MOBILE MENU
  const mobileMenu = menuIsOpen && (
    <div className="black-out">
      <div className="mobile-menu">
        <div className="tags">
          <TagMenu />
        </div>
        <RoadmapMenu productRequests={products} loading={!products} />
      </div>
    </div>
  );

  const mobileHeader = (
    <header>
      <Logo />
      {mobileMenu}
      <MainMenu loading={!products} />
    </header>
  );

  const tabletHeader = (
    <header className="top">
      <Logo />
      <TagMenu />
      <RoadmapMenu productRequests={products} loading={!products} />
    </header>
  );

  return (
    <HomeStyles>
      <Head>
        <title>Product Feedback | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile ? mobileHeader : tabletHeader}

      <main>
        {!isMobile && (
          <MainMenu numOfSuggestions={products?.length} loading={!products} />
        )}

        {!products ? renderedSkeletonLoading : renderedProducts}
        {products === 0 && <EmptyState />}
      </main>
    </HomeStyles>
  );
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_ALL_SUGGESTIONS,
  });
  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
