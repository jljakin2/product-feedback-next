import Head from "next/head";
import styled from "styled-components";

import GoBackBtn from "../components/Buttons/GoBackBtn";
import EditFeedbackBtn from "../components/Buttons/EditFeedbackBtn";

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

      <main>create new</main>
    </PageStyles>
  );
}
