import styled from "styled-components";

import useForm from "../../lib/useForm";
import FormStyles from "../styles/FormStyles";

const AddReplyFormStyles = styled.div`
  form {
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    padding: 0;
  }

  button {
    align-self: flex-end;
  }
`;

export default function AddReplyForm({
  reply,
  closeReplyToComment,
  closeReplyToReply,
}) {
  const { inputs, handleChange, resetForm } = useForm({
    reply: "",
  });

  function handleReply(e) {
    e.preventDefault();
    resetForm();
    reply ? closeReplyToReply() : closeReplyToComment();

    console.log("i'm replying, baby!");
  }

  return (
    <AddReplyFormStyles>
      <FormStyles onSubmit={handleReply}>
        <div className="form-control">
          <textarea
            className="input"
            name="reply"
            value={inputs.reply}
            onChange={handleChange}></textarea>
        </div>
        <button className="btn purple">Post Reply</button>
      </FormStyles>
    </AddReplyFormStyles>
  );
}

AddReplyForm.defaultProps = {
  reply: false, // is the component being used for a reply to reply form or a reply to comment form? Toggles which callback function is used to close the form when submitted
};
