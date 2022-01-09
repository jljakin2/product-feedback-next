import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

import GoBackBtn from "../../components/Buttons/GoBackBtn";
import EditFeedbackBtn from "../../components/Buttons/EditFeedbackBtn";
import CommentsContainer from "../../components/Comments/CommentsContainer";
import useSingleSuggestion from "../../lib/hooks/queries/useSingleSuggestion";

import SuggestionCard from "../../components/SuggestionCard";
import AddCommentForm from "../../components/Comments/AddCommentForm";
import { media } from "../../lib/config";

const PageStyles = styled.div`
  padding: 1.5rem 1.5rem;

  ${media.tablet} {
    padding: 3.5rem 2.5rem 1.5rem 2.5rem;
  }

  ${media.laptop} {
    max-width: fit-content;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    padding: 3.5rem 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function SuggestionPage() {
  const router = useRouter();
  let { id } = router.query;

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
        <title>Product Feedback {product && `| ${product.title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <GoBackBtn />
        <EditFeedbackBtn id={product?.id} />
      </header>

      <main>
        {/* TODO: do we need the "product" conditional? AND connect graphql query with comment data */}
        {product && <SuggestionCard product={product} />}
        {product && <CommentsContainer comments={product.comments} />}
        {product && <AddCommentForm />}
      </main>
    </PageStyles>
  );
}
