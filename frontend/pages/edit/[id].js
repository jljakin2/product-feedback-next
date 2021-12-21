import Head from "next/head";
import styled from "styled-components";

import SuggestionForm from "../../components/SuggestionForm";
import GoBackBtn from "../../components/Buttons/GoBackBtn";
import { useRouter } from "next/router";
import useSingleSuggestion from "../../lib/hooks/useSingleSuggestion";

const PageStyles = styled.div`
  padding: 1.5rem 1.5rem;
`;

export default function CreatePage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useSingleSuggestion(id);

  {
    loading && <p>Loading...</p>;
  }
  {
    error && <p>something went wrong...{error.message}</p>;
  }

  const product = data?.Suggestion;

  return (
    <PageStyles>
      <Head>
        <title>Product Feedback | Edit Suggestion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <GoBackBtn />
      </header>

      {/* TODO: add skeleton loading component for when product isn't available yet */}
      <main>{product && <SuggestionForm edit product={product} />}</main>
    </PageStyles>
  );
}
