import { gql, useMutation } from "@apollo/client";
import { GET_SINGLE_SUGGESTION } from "../queries/useSingleSuggestion";

const CREATE_REPLY = gql`
  mutation CREATE_REPLY(
    $comment: CommentRelateToOneInput
    $content: String
    $replyingTo: UserRelateToOneInput
  ) {
    createReply(
      data: {
        comment: $comment
        content: $content
        replyingTo: $replyingTo
        user: { connect: { id: "61ba6848fe09b43f32591efe" } }
      }
    ) {
      id
    }
  }
`;

function useCreateReply(comment, content, replyingTo) {
  const [createReply, { error, data, loading }] = useMutation(CREATE_REPLY, {
    variables: {
      comment: { connect: { id: comment } },
      content,
      replyingTo: { connect: { id: replyingTo } },
    },
    // need to refetch the query that gets a single suggestion in order to update the apollo cache.
    // the refetchQueries API takes the latest variable that was used with the query
    refetchQueries: [GET_SINGLE_SUGGESTION],
  });

  return {
    createReply,
    error,
    data,
    loading,
  };
}

export default useCreateReply;
