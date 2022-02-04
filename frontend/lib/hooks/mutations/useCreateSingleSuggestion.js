import { gql, useMutation } from "@apollo/client";
import { GET_SINGLE_SUGGESTION } from "../queries/useSingleSuggestion";
import { GET_ALL_SUGGESTIONS } from "../queries/useSuggestions";

const CREATE_SINGLE_SUGGESTION = gql`
  mutation CREATE_SINGLE_SUGGESTION(
    $title: String
    $category: SuggestionCategoryType
    $description: String
  ) {
    createSuggestion(
      data: {
        title: $title
        category: $category
        upvotes: 0
        status: suggestion
        description: $description
      }
    ) {
      id
    }
  }
`;

function useCreateSingleSuggestion(title, category, description) {
  const [createSuggestion, { error, data, loading }] = useMutation(
    CREATE_SINGLE_SUGGESTION,
    {
      variables: {
        title,
        category,
        description,
      },
      refetchQueries: [{ query: GET_SINGLE_SUGGESTION }],
      awaitRefetchQueries: true,
    }
  );

  return {
    createSuggestion,
    error,
    data,
    loading,
  };
}

export default useCreateSingleSuggestion;
