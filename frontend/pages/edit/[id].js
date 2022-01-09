import Head from "next/head";
import styled from "styled-components";

import SuggestionForm from "../../components/SuggestionForm";
import GoBackBtn from "../../components/Buttons/GoBackBtn";
import { useRouter } from "next/router";
import useSingleSuggestion from "../../lib/hooks/queries/useSingleSuggestion";
import { media } from "../../lib/config";

const PageStyles = styled.div`
  padding: 1.5rem 1.5rem;

  ${media.laptop} {
    max-width: fit-content;

    margin: 0 auto;
    padding: 5.75rem 0;
  }

  ${media.desktop} {
    max-width: 40vw;
  }
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
