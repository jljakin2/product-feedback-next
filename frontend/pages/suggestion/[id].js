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
import { initializeApollo } from "../../lib/apollo";
import { GET_SINGLE_SUGGESTION } from "../../lib/hooks/queries/useSingleSuggestion";
import SuggestionCardSkeleton from "../../components/Skeleton/SuggestionCardSkeleton";
import CommentSkeleton from "../../components/Skeleton/CommentSkeleton";
import { GET_ALL_SUGGESTIONS } from "../../lib/hooks/queries/useSuggestions";

const PageStyles = styled.div`
  padding: 1.5rem 1.5rem;

  ${media.tablet} {
    padding: 3.5rem 2.5rem 1.5rem 2.5rem;
  }

  ${media.laptop} {
    max-width: 80vw;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

  ${media.desktop} {
    max-width: 60vw;
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
        {!product ? (
          <SuggestionCardSkeleton />
        ) : (
          <SuggestionCard product={product} />
        )}
        {!product ? (
          <CommentSkeleton />
        ) : (
          <CommentsContainer comments={product.comments} />
        )}
        <AddCommentForm />
      </main>
    </PageStyles>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_SINGLE_SUGGESTION,
    variables: { id },
  });
  return { props: { initialApolloState: apolloClient.cache.extract() } };
}

export async function getStaticPaths() {
  /**
   * 1. connect to apollo client and get all items in the database
   * 2. map to each item and grab the id and pass it to the params object so next.js can build a static page for each potential
   *    id in the dynamic routing
   * 3. return the list of paths and the fallback variable which in this case will be false
   */

  // connect to apollo client and get all suggestions
  const apolloClient = initializeApollo();
  const suggestions = await apolloClient.query({
    query: GET_ALL_SUGGESTIONS,
  });

  const data = suggestions.data.allSuggestions; // pull the list of suggestions out of the returned data

  // Get the paths we want to pre-render based on suggestions
  const paths = data.map(suggestion => ({
    params: { id: suggestion.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
