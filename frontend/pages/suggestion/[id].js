import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

import GoBackBtn from "../../components/Buttons/GoBackBtn";
import EditFeedbackBtn from "../../components/Buttons/EditFeedbackBtn";
import CommentsContainer from "../../components/Comments/CommentsContainer";
import useSingleSuggestion from "../../lib/hooks/useSingleSuggestion";

import data from "../../lib/data.json";
import SuggestionCard from "../../components/SuggestionCard";
import AddCommentForm from "../../components/Comments/AddCommentForm";

const PageStyles = styled.div`
  padding: 1.5rem 1.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function SuggestionPage() {
  const router = useRouter();
  let { id } = router.query;

  // const products = data.productRequests;
  // const product = products.filter(item => {
  //   return item.id == id;
  // })[0];

  const { data, loading, error } = useSingleSuggestion(id);

  {
    loading && <p>Loading...</p>;
  }
  {
    error && <p>something went wrong...{error.message}</p>;
  }

  const product = data?.Suggestion;
  console.log(product);

  return (
    <PageStyles>
      <Head>
        <title>Product Feedback | Suggestion: {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <GoBackBtn />
        <EditFeedbackBtn />
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
