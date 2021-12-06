import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

import GoBackBtn from "../components/Buttons/GoBackBtn";
import SuggestionForm from "../components/SuggestionForm";

const PageStyles = styled.div`
  padding: 1.5rem 1.5rem;
`;

export default function CreatePage() {
  return (
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
  );
}
