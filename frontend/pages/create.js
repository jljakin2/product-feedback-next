import Head from "next/head";
import styled from "styled-components";

import GoBackBtn from "../components/Buttons/GoBackBtn";
import SuggestionForm from "../components/SuggestionForm";

import { media } from "../lib/config";

const PageStyles = styled.div`
  position: relative;

  padding: 1.5rem 1.5rem;

  ${media.tablet} {
    padding: 2.5rem 7.125rem;
  }

  ${media.laptop} {
    max-width: fit-content;

    margin: 0 auto;
    padding: 3rem 0;
  }

  ${media.desktop} {
    max-width: 40vw;
  }
`;

export default function CreatePage() {
  return (
    <>
      <PageStyles>
        <Head>
          <title>Product Feedback | Create New Suggestion</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <GoBackBtn />
        </header>

        <main>
          <SuggestionForm />
        </main>
      </PageStyles>
    </>
  );
}
