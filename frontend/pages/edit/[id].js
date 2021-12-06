import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

import SuggestionForm from "../../components/SuggestionForm";
import GoBackBtn from "../../components/Buttons/GoBackBtn";

const PageStyles = styled.div`
  padding: 1.5rem 1.5rem;
`;

export default function CreatePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageStyles>
      <Head>
        <title>Product Feedback | Edit Suggestion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <GoBackBtn />
      </header>

      <main>
        <SuggestionForm edit />
      </main>
    </PageStyles>
  );
}
