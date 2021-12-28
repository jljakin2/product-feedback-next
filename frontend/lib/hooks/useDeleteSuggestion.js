import { gql, useMutation } from "@apollo/client";
import { GET_ALL_SUGGESTIONS } from "../../lib/hooks/useSuggestions";

const DELETE_SUGGESTION = gql`
  mutation DELETE_SUGGESTION($id: ID!) {
    deleteSuggestion(id: $id) {
      id
    }
  }
`;

function useDeleteSuggestion(id) {
  const [deleteSuggestion, { error, data, loading }] = useMutation(
    DELETE_SUGGESTION,
    {
      variables: {
        id,
      },
      refetchQueries: [GET_ALL_SUGGESTIONS],
    }
  );

  return {
    deleteSuggestion,
    error,
    data,
    loading,
  };
}

export default useDeleteSuggestion;
