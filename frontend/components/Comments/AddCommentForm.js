import { useState } from "react";
import styled from "styled-components";

import FormStyles from "../styles/FormStyles";
import useForm from "../../lib/useForm";
import useCreateComment from "../../lib/hooks/mutations/useCreateComment";
import { useRouter } from "next/router";
import { validateCommentForm } from "../../lib/validateForms";
import InputError from "../InputError";

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CharCountStyles = styled.p`
  color: ${({ isOverCharMax }) =>
    isOverCharMax ? "var(--delete)" : "var(--greyBlue)"};
`;

export default function AddCommentForm() {
  const { inputs, handleChange, resetForm } = useForm({
    comment: "",
  });
  const [errors, setErrors] = useState({});

  // get the suggestion id by checking the current route
  const router = useRouter();
  const { id } = router.query;

  // handlers for checking character maximum limit for comment
  const maxChar = 250; // maximum allowed characters for a comment
  const charLeft = maxChar - inputs.comment.length; // calculate how many characters are left before reaching the max
  const isOverCharMax = charLeft < 0; // checks if charCount is over the max set and is used as style prop to notify user when they are over the max

  const { createComment, loading, error } = useCreateComment(
    id,
    inputs.comment
  ); // needs suggestion id and content. user is defaulted since there isn't an account function

  async function handleCommentForm(e) {
    e.preventDefault();

    const formErrors = validateCommentForm(inputs);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const res = await createComment(); // submit the comment to the backend
      resetForm(); // reset the form once everything is complete
    }
  }

  return (
    <FormStyles onSubmit={handleCommentForm}>
      <h2>Add Comment</h2>
      <fieldset disabled={loading}>
        <div className="form-control">
          <textarea
            className={errors.comment ? "input error" : "input"}
            rows="4"
            placeholder="Type your comment here"
            name="comment"
            value={inputs.comment}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, comment: "" })}></textarea>
          {errors.comment && <InputError>{errors.comment}</InputError>}
        </div>
      </fieldset>

      <Footer>
        <CharCountStyles
          className="body-1"
          isOverCharMax={isOverCharMax}>{`${charLeft} ${
          charLeft === 1 ? "Character" : "Characters"
        } left`}</CharCountStyles>
        <button className="btn purple">Add Comment</button>
      </Footer>
    </FormStyles>
  );
}
