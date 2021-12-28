import { useQuery, gql } from "@apollo/client";

export const GET_ALL_SUGGESTIONS = gql`
  query {
    allSuggestions {
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

function useSuggestions() {
  const { error, data, loading } = useQuery(GET_ALL_SUGGESTIONS);

  return {
    error,
    data,
    loading,
  };
}

export default useSuggestions;
