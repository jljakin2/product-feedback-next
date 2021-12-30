import { useState } from "react";
import styled from "styled-components";

import useForm from "../../lib/useForm";
import FormStyles from "../styles/FormStyles";
import useCreateReply from "../../lib/hooks/mutations/useCreateReply";
import { validateReplyForm } from "../../lib/validateForms";
import InputError from "../InputError";

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
  const [errors, setErrors] = useState({});

  // hook to create reply mutation
  const { createReply, loading, error } = useCreateReply(
    commentId,
    inputs.reply,
    replyingToId
  );

  async function handleReply(e) {
    e.preventDefault();

    const formErrors = validateReplyForm(inputs);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const res = await createReply();

      resetForm();
      reply ? closeReplyToReply() : closeReplyToComment();
    }
  }

  return (
    <AddReplyFormStyles>
      <FormStyles onSubmit={handleReply}>
        <fieldset disabled={loading}>
          <div className="form-control">
            <textarea
              className={errors.reply ? "input error" : "input"}
              name="reply"
              value={inputs.reply}
              onChange={handleChange}
              onKeyDown={() => setErrors({ ...errors, reply: "" })}></textarea>
            {errors.reply && <InputError>{errors.reply}</InputError>}
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
