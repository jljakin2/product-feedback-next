import { gql, useMutation } from "@apollo/client";

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
