import { gql, useMutation } from "@apollo/client";
import { GET_ALL_SUGGESTIONS } from "../queries/useSuggestions";
import { GET_SINGLE_SUGGESTION } from "../queries/useSingleSuggestion";
import { GET_CURRENT_USER } from "../queries/useCurrentUser";

const UPDATE_UPVOTE = gql`
  # mutation UPDATE_UPVOTE($id: ID!, $upvotes: Int) {
  #   updateSuggestion(id: $id, data: { upvotes: $upvotes }) {
  #     id
  #   }
  # }

  mutation ADD_UPVOTE(
    $suggestionId: ID!
    $upvotes: Int
    $userId: ID!
    $suggestion: SuggestionRelateToManyInput
  ) {
    updateSuggestion(id: $suggestionId, data: { upvotes: $upvotes }) {
      id
    }
    updateUser(id: $userId, data: { upvotes: $suggestion }) {
      id
    }
  }
`;

function useUpdateUpvote(suggestionId, upvotes, userId) {
  const [updateUpvote, { error, data, loading }] = useMutation(UPDATE_UPVOTE, {
    variables: {
      suggestionId,
      upvotes,
      userId,
      suggestion: { connect: { id: suggestionId } },
    },
    // need to refetch the query that gets a single suggestion in order to update the apollo cache.
    // the refetchQueries API takes the latest variable that was used with the query
    refetchQueries: [
      GET_ALL_SUGGESTIONS,
      GET_SINGLE_SUGGESTION,
      GET_CURRENT_USER,
    ],
  });

  return {
    updateUpvote,
    error,
    data,
    loading,
  };
}

export default useUpdateUpvote;
