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
      refetchQueries: ["GET_ALL_SUGGESTIONS"], // you can reference previously refetched queries by using the unique name of the query in quotes
    });

  return {
    deleteSuggestion,
    deleteError,
    deleteData,
    deleteLoading,
  };
}

export default useDeleteSuggestion;
