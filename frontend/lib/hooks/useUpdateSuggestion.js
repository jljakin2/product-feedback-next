import { gql, useMutation } from "@apollo/client";
import { GET_SINGLE_SUGGESTION } from "../../lib/hooks/useSingleSuggestion";

const UPDATE_SUGGESTION = gql`
  mutation UPDATE_SUGGESTION(
    $id: ID!
    $title: String
    $category: SuggestionCategoryType
    $status: SuggestionStatusType
    $description: String
  ) {
    updateSuggestion(
      id: $id
      data: {
        title: $title
        category: $category
        status: $status
        description: $description
      }
    ) {
      id
    }
  }
`;

function useUpdateSuggestion(id, title, category, status, description) {
  const [updateSuggestion, { error, data, loading }] = useMutation(
    UPDATE_SUGGESTION,
    {
      variables: {
        id,
        title,
        category,
        status,
        description,
      },
      // need to refetch the query that gets a single suggestion in order to update the apollo cache.
      // the refetchQueries API takes the latest variable that was used with the query
      refetchQueries: [GET_SINGLE_SUGGESTION],
    }
  );

  return {
    updateSuggestion,
    error,
    data,
    loading,
  };
}

export default useUpdateSuggestion;
