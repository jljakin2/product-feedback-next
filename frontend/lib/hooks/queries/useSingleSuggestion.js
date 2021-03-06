import { useQuery, gql } from "@apollo/client";

export const GET_SINGLE_SUGGESTION = gql`
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
        content
        user {
          id
          image
          name
          username
        }
        replies {
          content
          replyingTo {
            id
            image
            username
          }
          user {
            id
            image
            name
            username
          }
        }
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
