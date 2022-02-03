import { gql, useMutation } from "@apollo/client";
import { GET_SINGLE_SUGGESTION } from "../queries/useSingleSuggestion";
import { GET_ALL_SUGGESTIONS } from "../queries/useSuggestions";

const DELETE_SUGGESTION = gql`
  mutation DELETE_SUGGESTION($id: ID!) {
    deleteSuggestion(id: $id) {
      id
    }
  }
`;

function useDeleteSuggestion(id) {
  const [deleteSuggestion, { deleteError, deleteData, deleteLoading }] =
    useMutation(DELETE_SUGGESTION, {
      variables: {
        id,
      },
      // refetchQueries: [GET_ALL_SUGGESTIONS, GET_SINGLE_SUGGESTION], // you can reference previously refetched queries by using the unique name of the query in quotes
      update(cache) {
        const normalizedId = cache.identify({ id, __typename: "Suggestion" });
        cache.evict({ id: normalizedId });
        cache.gc();
      },
    });

  // , "GET_ALL_SUGGESTIONS"

  return {
    deleteSuggestion,
    deleteError,
    deleteData,
    deleteLoading,
  };
}

export default useDeleteSuggestion;
