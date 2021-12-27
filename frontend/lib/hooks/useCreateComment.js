import { gql, useMutation } from "@apollo/client";
import { GET_SINGLE_SUGGESTION } from "../../lib/hooks/useSingleSuggestion";

const CREATE_COMMENT = gql`
  mutation CREATE_COMMENT(
    $suggestion: SuggestionRelateToOneInput
    $content: String
  ) {
    createComment(
      data: {
        suggestion: $suggestion
        content: $content
        user: { connect: { id: "61ba6848fe09b43f32591efe" } }
      }
    ) {
      id
    }
  }
`;

function useCreateComment(suggestion, content) {
  const [createComment, { error, data, loading }] = useMutation(
    CREATE_COMMENT,
    {
      variables: {
        suggestion: { connect: { id: suggestion } },
        content,
      },
      // need to refetch the query that gets a single suggestion in order to update the apollo cache.
      // the refetchQueries API takes the latest variable that was used with the query
      refetchQueries: [GET_SINGLE_SUGGESTION],
    }
  );

  return {
    createComment,
    error,
    data,
    loading,
  };
}

export default useCreateComment;
