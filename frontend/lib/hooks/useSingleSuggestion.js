import { useQuery, gql } from "@apollo/client";

const GET_SINGLE_SUGGESTION = gql`
  query GetSuggestion($id: ID!) {
    Suggestion(where: { id: $id }) {
      id
      title
      category
      upvotes
      status
      description
      comments {
        id
      }
    }
  }
`;

function useSingleSuggestion(id) {
  const { error, data, loading } = useQuery(GET_SINGLE_SUGGESTION, {
    variables: {
      id,
    },
  });

  return {
    error,
    data,
    loading,
  };
}

export default useSingleSuggestion;
