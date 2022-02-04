import Head from "next/head";
import styled from "styled-components";

import SuggestionForm from "../../components/SuggestionForm";
import GoBackBtn from "../../components/Buttons/GoBackBtn";
import { useRouter } from "next/router";
import useSingleSuggestion, {
  GET_SINGLE_SUGGESTION,
} from "../../lib/hooks/queries/useSingleSuggestion";
import { media } from "../../lib/config";
import { initializeApollo } from "../../lib/apollo";
import { GET_ALL_SUGGESTIONS } from "../../lib/hooks/queries/useSuggestions";

const PageStyles = styled.div`
  padding: 1.5rem 1.5rem;

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
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSingleSuggestion(id);

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

export async function getServerSideProps(context) {
  const { id } = context.params;

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_SINGLE_SUGGESTION,
    variables: { id },
  });
  return { props: { initialApolloState: apolloClient.cache.extract() } };
}

// export async function getStaticPaths() {
//   /**
//    * 1. connect to apollo client and get all items in the database
//    * 2. map to each item and grab the id and pass it to the params object so next.js can build a static page for each potential
//    *    id in the dynamic routing
//    * 3. return the list of paths and the fallback variable which in this case will be false
//    */

//   // connect to apollo client and get all suggestions
//   const apolloClient = initializeApollo();
//   const suggestions = await apolloClient.query({
//     query: GET_ALL_SUGGESTIONS,
//   });

//   const data = suggestions.data.allSuggestions; // pull the list of suggestions out of the returned data

//   // Get the paths we want to pre-render based on suggestions
//   const paths = data.map(suggestion => ({
//     params: { id: suggestion.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }
