// third-party
import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import FormStyles from "../styles/FormStyles";
import InputError from "../InputError";

// helpers
import useForm from "../../lib/useForm";
import useCreateReply from "../../lib/hooks/mutations/useCreateReply";
import { validateReplyForm } from "../../lib/validateForms";
import { media } from "../../lib/config";

// ===== STYLING =====
const AddReplyFormStyles = styled.div`
  form {
    margin-top: 1rem;
    padding: 0;

    width: 100%;
  }

  fieldset {
    display: flex;
    flex-direction: column;

    ${media.laptop} {
      flex-direction: row;
      justify-content: stretch;

      width: 100%;
    }
  }

  button {
    align-self: flex-end;

    ${media.laptop} {
      align-self: flex-start;
    }
  }
`;
// ===== END OF STYLING =====

export default function AddReplyForm({
  reply,
  closeReplyToComment,
  closeReplyToReply,
  commentId,
  replyingToId,
}) {
  // use form helper function to keep track of everything related to the form
  const { inputs, handleChange, resetForm } = useForm({
    reply: "",
  });
  const [errors, setErrors] = useState({}); // keep track of any errors returned from the validation helper

  // hook to create reply mutation
  const { createReply, loading, error } = useCreateReply(
    commentId,
    inputs.reply,
    replyingToId
  );

  async function handleReply(e) {
    e.preventDefault();

    // check if there are any errors and update the errors state if there are any
    const formErrors = validateReplyForm(inputs);
    setErrors(formErrors);

    // as long as there aren't any errors
    if (Object.keys(formErrors).length === 0) {
      const res = await createReply();

      resetForm();
      reply ? closeReplyToReply() : closeReplyToComment(); // this component is being used for replying to comments and replies so the function to close them are different
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
              // ux choice to remove errors for this field whenever there is a keydown in the field
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

AddReplyForm.propTypes = {
  reply: PropTypes.bool, // is the component being used for a reply to a reply?
  closeReplyToComment: PropTypes.func, // callback function to close the reply form when replying to a comment
  closeReplyToReply: PropTypes.func, // callback function to close the reply form when replying to a reply
  commentId: PropTypes.string, // which comment is being replied to?
  replyingToId: PropTypes.string, // who is being replied to?
};
