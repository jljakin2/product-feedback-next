import styled from "styled-components";

import useForm from "../../lib/useForm";
import FormStyles from "../styles/FormStyles";
import useCreateReply from "../../lib/hooks/mutations/useCreateReply";

const AddReplyFormStyles = styled.div`
  form {
    margin-top: 1rem;
    padding: 0;
  }

  fieldset {
    display: flex;
    flex-direction: column;
  }

  button {
    align-self: flex-end;
  }
`;

export default function AddReplyForm({
  reply,
  closeReplyToComment,
  closeReplyToReply,
  commentId,
  replyingToId,
}) {
  const { inputs, handleChange, resetForm } = useForm({
    reply: "",
  });

  // hook to create reply mutation
  const { createReply, loading, error } = useCreateReply(
    commentId,
    inputs.reply,
    replyingToId
  );

  async function handleReply(e) {
    e.preventDefault();
    // console.log({ commentId, replyingToId });
    const res = await createReply();

    resetForm();
    reply ? closeReplyToReply() : closeReplyToComment();

    console.log("i'm replying, baby!");
  }

  return (
    <AddReplyFormStyles>
      <FormStyles onSubmit={handleReply}>
        <fieldset disabled={loading}>
          <div className="form-control">
            <textarea
              className="input"
              name="reply"
              value={inputs.reply}
              onChange={handleChange}></textarea>
          </div>
          <button className="btn purple">Post Reply</button>
        </fieldset>
      </FormStyles>
    </AddReplyFormStyles>
  );
}

AddReplyForm.defaultProps = {
  reply: false, // is the component being used for a reply to reply form or a reply to comment form? Toggles which callback function is used to close the form when submitted
};
